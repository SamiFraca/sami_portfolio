import { GlassBentoCard, type BentoCardProps } from "./glass-card-bento";

interface GlassBentoGridProps {
  items: BentoCardProps[];
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export const GlassBentoGrid = ({ items, cols = { sm: 1, md: 6, lg: 4 } }: GlassBentoGridProps) => {
  const gridColsClass = `grid-cols-${cols.sm || 1} md:grid-cols-${cols.md || 6} lg:grid-cols-${cols.lg || 4}`;
  
  return (
    <div className={`grid ${gridColsClass} gap-6 w-full auto-rows-max`}>
      {items.map((item) => (
        <GlassBentoCard key={item.id} {...item} />
      ))}
    </div>
  );
};
