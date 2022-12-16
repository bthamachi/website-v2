import { BoltIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group rounded-full bg-white/90 fill-teal-50 px-3 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <BoltIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 " />
      ) : (
        <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition" />
      )}
    </button>
  );
};

export default DarkModeButton;
