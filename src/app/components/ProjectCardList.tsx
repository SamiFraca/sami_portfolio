import ProjectCard from "@components/ProjectCard";

const ProjectCards = [
  {
    href: "https://github.com/SamiFraca/WatchMe_Vue",
    text: "WatchMe FrontEnd",
    description:
      "WatchMe FrontEnd Application made with Vue, where users can register and promote their own pubs and activities",
  },
  {
    href: "https://github.com/SamiFraca/TodoApp",
    text: "Todo App",
    description:
      "React + TypeScript + Vite + Zustand todo app",
  },
  {
    href: "https://github.com/SamiFraca/WatchMeAPI",
    text: "WatchMe Backend",
    description:
      "WatchMe API Application made with C# (.NET) and SQL Server, where i handle the User, Activity and Pub data",
  },
  {
    href: "https://github.com/SamiFraca/Blog",
    text: "Blog",
    description:
      "My personal blog where i share new articles and own thoughts, made with Astro",
  },
  
];
export default function ProjectCardList() {
  return (
    <ul className="flex flex-col gap-4 my-4 ">
      {ProjectCards.map((card, index) => (
        <li key={index} className="border-slate-400 border bg-opacity-10 rounded-lg p-4 transition-all hover:bg-slate-600 ">
          <ProjectCard
            title={card.text}
            href={card.href}
            description={card.description}
          />
        </li>
      ))}
    </ul>
  );
}
