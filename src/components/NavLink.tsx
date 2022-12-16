import Link from "next/link";
import { useRouter } from "next/router";
import { joinClassNames } from "../lib/css";

type NavLinkProps = {
  name: string;
  href: string;
};

const NavLink = ({ name, href }: NavLinkProps) => {
  const isActive = useRouter().pathname == href;

  return (
    <li
      className={joinClassNames(
        "relative block cursor-pointer px-3 py-2 transition",
        isActive ? "underline" : ""
      )}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavLink;
