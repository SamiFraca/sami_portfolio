export type CardProps = {
  title: string;
  href: string;
  description: string;
};

export const Card = ({ title, href, description }: CardProps) => {
  return (
    <a href={href} className="cursor-pointer">
      <h2 className="text-lg">{title}</h2>
      <p className="leading-relaxed">{description}</p>
    </a>
  );
};
