import { GlassBentoCard, type BentoCardProps } from "./glass-card-bento";

interface GlassBentoGridProps {
  items: BentoCardProps[];
}

const GRID_LAYOUT = {
  0: { colSpan: "lg:col-span-3 md:col-span-6", rowSpan: "lg:row-span-4 md:row-span-1-5", minHeight: "lg:h-full" },
  1: { colSpan: "lg:col-span-2 md:col-span-3", rowSpan: "md:row-span-1 lg:row-span-2", minHeight: "" },
  2: { colSpan: "lg:col-span-2 md:col-span-3", rowSpan: "md:row-span-1 lg:row-span-2", minHeight: "" },
  3: { colSpan: "lg:col-span-2 md:col-span-3", rowSpan: "md:row-span-1 lg:row-span-2", minHeight: "" },
  4: { colSpan: "md:col-span-3", rowSpan: "md:row-span-2 lg:row-span-3", minHeight: "" },
  5: { colSpan: "lg:col-span-2 md:col-span-3", rowSpan: "md:row-span-1", minHeight: "" },
} as const;

export const GlassBentoGrid = ({ items }: GlassBentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-4 lg:gap-8 mx-auto w-full xl:p-0 px-6">
      {items.map((item, index) => {
        const layout = GRID_LAYOUT[index as keyof typeof GRID_LAYOUT] || GRID_LAYOUT[0];
        const { colSpan, rowSpan, minHeight } = layout;

        return (
          <div
            key={item.id}
            className={`row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-10 lg:space-y-4 ${colSpan} ${rowSpan} ${minHeight}`}
            style={{ background: "transparent" }}
          >
            <GlassBentoCard {...item} />
          </div>
        );
      })}
    </div>
  );
};
