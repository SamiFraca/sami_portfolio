import { Project } from "next/dist/build/swc";

export type ProjectCardProps = {
  title: string;
  href: string;
  description: string;
};
export default function ProjectCard({
  title,
  href,
  description,
}: ProjectCardProps) {
  return (
    <a href={href} className="cursor-pointer">
      <h2 className="text-lg">{title}</h2>
      <p className="leading-relaxed">{description}</p>
    </a>
  );
}
