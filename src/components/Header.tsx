import { BoltIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleSystemTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-md">
      <ul className="flex w-full  items-center justify-between">
        <NavLink name="Home" href="/" />
        <NavLink name="Projects" href="/projects" />
        <NavLink name="Articles" href="/articles" />
        <NavLink name="Work-Log" href="/work-log" />
        <button
          onClick={() => toggleSystemTheme()}
          className="group  px-3 py-2  transition "
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <BoltIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 " />
          ) : (
            <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block" />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Header;
