import SideBarItem from "@/components/SidebarItem";


const sidebarItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
];


export default function SidebarItemList() {
    return (
        <ul className="flex md:flex-col flex-row justify-center gap-4">
            {sidebarItems.map((item, index) => (
                <li key={index}>
                    <SideBarItem {...item} />
                </li>
            ))}
        </ul>
    );
}