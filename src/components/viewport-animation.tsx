'use client'
import { useEffect, useRef, ReactNode } from "react";

interface ViewportAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animationClass?: string;
  threshold?: number;
}

export const ViewportAnimation = ({
  children,
  animationClass = "content-reveal",
  threshold = 1,
  className,
  ...props
}: ViewportAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animationClass, threshold]);

  return <div ref={elementRef} className={`${animationClass} ${className || ""}`} {...props}>{children}</div>;
};
