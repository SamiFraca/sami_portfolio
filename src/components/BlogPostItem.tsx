export const BlogPostItem = ({ title, description, href }: any) => {
    return (
        <li>
            <a href={href} className="cursor-pointer">
                <h2 className="text-lg">{title}</h2>
                <p className="leading-relaxed">{description}</p>
            </a>
        </li>
    );
}