import Image from "next/image";
import DarkModeButton from "./DarkModeButton";
import HeaderNavLinks from "./HeaderNavLinks";

const DesktopHeader = () => {
  return (
    <ul className="hidden md:flex md:w-full md:items-center md:justify-between">
      <Image
        src="/ProfilePic.jpeg"
        width={60}
        height={60}
        alt="Profile Image"
        className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover "
      />
      <div className="text-md flex rounded-full bg-white/90 px-4 py-2  font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <HeaderNavLinks />
      </div>
      <DarkModeButton />
    </ul>
  );
};

export default DesktopHeader;
