import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const MobileHeader = () => {
  return (
    <ul className="flex items-center justify-between lg:hidden">
      <Image
        src="/ProfilePic.jpeg"
        width={60}
        height={60}
        className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover "
      />

      <div className="flex flex-row items-center gap-x-2">
        <DarkModeButton />
        <Bars3BottomRightIcon className="ml-4 h-8 w-8" />
      </div>
    </ul>
  );
};

export default MobileHeader;
