import { ReactNode } from "react";
import Image from "next/image";

interface SpotlightSectionProps {
  children: ReactNode;
  direction?: "left" | "right"; 
  className?: string;
}

export const SpotlightSection = ({
  children,
  direction = "left",
  className,
}: SpotlightSectionProps) => {
  const isRight = direction === "right";

  return (
    <section className={`relative overflow-hidden ${className}`} style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(30, 50, 80, 1) 10%, rgba(30, 50, 80, 1) 100%)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={'/background/seaweed2.svg'}
          alt="seaweed background"
          className={`absolute inset-0 w-full h-full   object-cover opacity-60 ${
            isRight ? "scale-x-[-1]" : ""
          }`}
          style={isRight ? { transform: "scaleX(-1) translateY(-100%)" } : undefined}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
};
