import SideNav from "../ui/menu/sidenav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:flex-row md:overflow-hidden p-3">
      <div className="w-full flex-none md:w-48">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}