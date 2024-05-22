import { BlogPostItemList } from "@/components/BlogPostList";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Blog</h1>
      <BlogPostItemList />
    </div>
  );
}
