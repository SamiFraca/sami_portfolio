import SidebarItemList from "./SidebarItemList";
function Sidebar() {
  return (
    <nav className="sticky top-0 md:top-5 bg-[#282c35] py-4 h-fit">
      <SidebarItemList />
    </nav>
  );
}

export default Sidebar;
