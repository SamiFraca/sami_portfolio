import { Posts } from "@/data/posts-data";
import { Projects } from "@/data/projects-data";
import { Card } from "@/components/card";

export const BlogPostList = () => {
  return (
    <ul className="flex flex-col gap-4 my-4">
      {Posts.map((post, index) => (
        <li key={index} className="hover:scale-105 transition-transform">
          <Card {...post} />
        </li>
      ))}
    </ul>
  );
};

export const ProjectCardList = () => {
  return (
    <ul className="flex flex-col gap-4 my-4">
      {Projects.map((card, index) => (
        <li key={index} className="border-slate-400 border bg-opacity-10 rounded-lg p-4 transition-all hover:bg-slate-600">
          <Card
            title={card.title}
            href={card.href}
            description={card.description}
          />
        </li>
      ))}
    </ul>
  );
};
