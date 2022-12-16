import { BoltIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-auto mt-4 max-w-md">
      <ul className="flex w-full  items-center justify-between">
        <NavLink name="Home" href="/" />
        <NavLink name="Projects" href="/projects" />
        <NavLink name="Articles" href="/articles" />
        <NavLink name="Work-Log" href="/work-log" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group rounded-full bg-white/90 fill-teal-50 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <BoltIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 " />
          ) : (
            <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition" />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Header;
