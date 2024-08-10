"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const animations = {
  fadeIn: { opacity: 0, duration: 2 },
};

type AnimationProviderProps = {
  children: React.ReactNode;
};

export default function AnimationProvider({
  children,
}: AnimationProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const timeline = gsap.timeline();
      const elements = containerRef.current.querySelectorAll(
        "[data-animation-name]",
      );

      elements.forEach((element) => {
        const animationName = element.getAttribute(
          "data-animation-name",
        ) as keyof typeof animations;

        if (!animationName) {
          return;
        }

        const animation = animations[animationName];

        if (!animation) {
          return;
        }

        timeline.from(element, animation);
      });
    },
    {
      scope: containerRef,
      dependencies: [containerRef],
    },
  );

  return (
    <div ref={containerRef} className="h-full">
      {children}
    </div>
  );
}
