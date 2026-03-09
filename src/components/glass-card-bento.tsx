import { ReactNode } from "react";
import Image from "next/image";

export interface BentoCardProps {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  content?: ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3 | 4;
  minHeight?: string;
  className?: string;
  occupiesHalfContent?: boolean;
}

export const bentoItems: BentoCardProps[] = [
  {
    id: "1",
    title: "I build softwares that drive revenue",
    image: "/images/ai.png",
    colSpan: 2,
    rowSpan: 4,
    minHeight: "60vh",
  },
  {
    id: "2",
    title: "My expertise",
    description: "Software, AI, ML & Data",
    image: "/images/code3-final.svg",
    occupiesHalfContent: true,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "3",
    title: "My expertise",
    description: "Software, AI, ML & Data",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "4",
    title: "My expertise",
    description: "Software, AI, ML & Data",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "5",
    title: "My expertise",
    description: "Software, AI, ML & Data",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "6",
    title: "My expertise",
    description: "Software, AI, ML & Data",
    colSpan: 1,
    rowSpan: 2,
  },

];

export const GlassBentoCard = ({
  title,
  description,
  image,
  imageAlt = "Card image",
  content,
  colSpan = 1,
  rowSpan = 1,
  minHeight,
  className = "",
  occupiesHalfContent = false,
}: BentoCardProps) => {
  const colSpanClass = {
    1: "md:col-span-1 lg:col-span-1",
    2: "md:col-span-2 lg:col-span-2",
    3: "md:col-span-3 lg:col-span-3",
    4: "md:col-span-4 lg:col-span-4",
  }[colSpan];

  const rowSpanClass = {
    1: "md:row-span-1 lg:row-span-1",
    2: "md:row-span-2 lg:row-span-2",
    3: "md:row-span-3 lg:row-span-3",
    4: "md:row-span-4 lg:row-span-4",
  }[rowSpan];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-transparent   group/bento hover:shadow-xl transition duration-200 flex flex-col justify-between ${colSpanClass} ${rowSpanClass} ${className} h-full `}
      style={{ minHeight }}
    >
      {image && (
        <div className={occupiesHalfContent ? "absolute bottom-0 w-full  h-2/3 lg:h-1/2" : "absolute inset-0 w-full h-full "}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${occupiesHalfContent ? "object-top" : "object-top lg:object-center"}`}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
        animation: "liquid-flow 3s ease-in-out infinite"
      }} />

      <div className="relative z-10 flex flex-col justify-start h-full p-5 lg:p-10 space-y-4 min-h-50  lg:min-h-auto" style={{minHeight}}>
        {title && (
          <h3 className="font-bold text-lg lg:text-3xl max-w-96 text-white group-hover/bento:translate-x-2 transition duration-200">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-white/70 text-sm lg:text-base max-w-96">
            {description}
          </p>
        )}
        {content && <div className="flex-1">{content}</div>}
      </div>

      <style>{`
        @keyframes liquid-flow {
          0%, 100% {
            background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
          }
          50% {
            background: linear-gradient(45deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          }
        }
      `}</style>
    </div>
  );
};
