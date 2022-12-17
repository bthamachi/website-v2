import NavLink from "./NavLink";

const HeaderNavLinks = () => {
  return (
    <>
      <NavLink name="Home" href="/" />
      <NavLink name="Projects" href="/projects" />
      <NavLink name="Articles" href="/articles" />
      <NavLink name="Work-Log" href="/work-log/2022-12-17" />
    </>
  );
};

export default HeaderNavLinks;
