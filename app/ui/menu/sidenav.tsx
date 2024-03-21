import MenuLinks from './menu-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between z-100 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <MenuLinks />
      </div>
    </div>
  );
}