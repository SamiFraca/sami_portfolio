import ProjectCard from "@/components/ProjectCard";
import {Projects} from "@/data/Projects";

export default function ProjectCardList() {
  return (
    <ul className="flex flex-col gap-4 my-4 ">
      {Projects.map((card, index) => (
        <li key={index} className="border-slate-400 border bg-opacity-10 rounded-lg p-4 transition-all hover:bg-slate-600 ">
          <ProjectCard
            title={card.title}
            href={card.href}
            description={card.description}
          />
        </li>
      ))}
    </ul>
  );
}
