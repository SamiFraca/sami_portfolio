import { Posts } from "@/data/Posts";
import { BlogPostItem } from "@/components/BlogPostItem";

export const BlogPostItemList = () => {
  return (
    <ul className="flex flex-col gap-8">
      {Posts.map((post, index) => (
        <li key={index} className="hover:scale-105 transition-transform">
          <BlogPostItem {...post} />
        </li>
      ))}
    </ul>
  );
};
