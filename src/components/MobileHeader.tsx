import Image from "next/image";
import DarkModeButton from "./DarkModeButton";
import MobileHeaderDropdownNavigation from "./MobileHeaderDropdownNavigation";

const MobileHeader = () => {
  return (
    <ul className="flex items-center justify-between md:hidden">
      <Image
        src="/ProfilePic.jpeg"
        alt="Profile Image"
        width={60}
        height={60}
        className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover "
      />

      <div className="flex flex-row items-center gap-x-2">
        <DarkModeButton />
        <MobileHeaderDropdownNavigation />
      </div>
    </ul>
  );
};

export default MobileHeader;
