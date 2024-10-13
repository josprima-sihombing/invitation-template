import { useCallback, useEffect, useMemo, useRef } from "react";

type AnimationProps = {
  children: React.ReactNode;
  animationClassName?:
    | "animate__fadeInUp"
    | "animate__fadeInDown"
    | "animate__fadeInLeft"
    | "animate__fadeInRight";
};

export default function Animation({
  children,
  animationClassName = "animate__fadeInUp",
}: AnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const callback = useCallback<IntersectionObserverCallback>(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains(animationClassName)) {
            entry.target.classList.add(animationClassName);
          }
        }
      });
    },
    [children],
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(callback, {
        root: null,
      }),
    [callback],
  );

  useEffect(() => {
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [observer]);

  return (
    <div ref={elementRef} className="animate__animated opacity-0">
      {children}
    </div>
  );
}
