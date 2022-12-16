import NavLink from "./NavLink";

const HeaderNavLinks = () => {
  return (
    <>
      <NavLink name="Home" href="/" />
      <NavLink name="Projects" href="/projects" />
      <NavLink name="Articles" href="/articles" />
      <NavLink name="Work-Log" href="/work-log" />
    </>
  );
};

export default HeaderNavLinks;
