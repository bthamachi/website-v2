import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="mx-auto mt-4 max-w-sm">
      <ul className="flex w-full  items-center justify-between">
        <NavLink name="Home" href="/" />
        <NavLink name="Projects" href="/projects" />
        <NavLink name="Articles" href="/articles" />
        <NavLink name="Work-Log" href="/work-log" />
      </ul>
    </div>
  );
};

export default Header;
