import Image from "next/image";
import DarkModeButton from "./DarkModeButton";
import NavLink from "./NavLink";

const DesktopHeader = () => {
  return (
    <ul className="hidden lg:flex lg:w-full lg:items-center lg:justify-between">
      <Image
        src="/ProfilePic.jpeg"
        width={60}
        height={60}
        className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover "
      />
      <NavLink name="Home" href="/" />
      <NavLink name="Projects" href="/projects" />
      <NavLink name="Articles" href="/articles" />
      <NavLink name="Work-Log" href="/work-log" />
      <DarkModeButton />
    </ul>
  );
};

export default DesktopHeader;
