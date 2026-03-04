import { ReactNode } from "react";

interface SpotlightSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
}

export const SpotlightSection = ({
  children,
  direction = "left",
}: SpotlightSectionProps) => {
  const isRight = direction === "right";

  return (
    <section className="relative overflow-hidden my-20">
      <div className="absolute inset-0 overflow-visible">
        <svg
          className={`animate-spotlight pointer-events-none absolute z-999 -top-160 lg:-top-100 h-[169%] w-[138%] lg:w-[84%] opacity-70 ${
            isRight
              ? "right-0 md:right-40 xl:right-70"
              : "-left-40 md:left-40 xl:left-70"
          }`}
          style={isRight ? { transform: "scaleX(-1)" } : undefined}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(0.822377 -0.568943 0.568943 0.822377 155.88 2291.09)"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-1">{children}</div>
    </section>
  );
};
