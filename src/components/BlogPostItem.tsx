
export type BlogPostItemProps = {
    title: string;
    description: string;
    href: string;
}
export const BlogPostItem = ({ title, description, href }: BlogPostItemProps) => {
    return (
            <a href={href} className="cursor-pointer">
                <h2 className="text-lg">{title}</h2>
                <p className="leading-relaxed">{description}</p>
            </a>
    );
}