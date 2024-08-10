"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const animations: Record<string, gsap.TweenVars> = {
  fadeIn: { opacity: 0 },
  slideDown: {
    y: -100,
  },
  slideUp: {
    y: 100,
  },
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

      const elements = containerRef.current.querySelectorAll(
        "[data-animation-name]",
      );

      elements.forEach((element) => {
        const animationNames =
          element.getAttribute("data-animation-name")?.split(" ") || [];

        let tweenVar: gsap.TweenVars = {};

        animationNames.forEach((animation) => {
          tweenVar = {
            ...tweenVar,
            ...animations[animation],
          };
        });

        const animationDuration =
          element.getAttribute("data-animation-duration") || 1;

        const animationDelay =
          element.getAttribute("data-animation-delay") || 0;

        tweenVar.duration = animationDuration;
        tweenVar.delay = Number(animationDelay);

        const animationAfter = element.getAttribute("data-animation-after");

        if (animationAfter) {
          tweenVar.onComplete = () => {
            gsap.to(element, {
              rotation: -10,
              duration: 3,
              ease: "none",
              transformOrigin: "top center",
              onComplete: () => {
                gsap.to(element, {
                  rotation: 10,
                  repeat: -1,
                  yoyo: true,
                  transformOrigin: "top center",
                  ease: "none",
                  duration: 3,
                });
              },
            });
          };
        }

        gsap.from(element, tweenVar);
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
