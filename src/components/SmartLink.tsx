import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { WEBSITE_URL } from "../constants/seo";

type SmartLinkProps = {
  name: string;
  href: string;
  children?: ReactNode;
};

const SmartLink = ({ name, href, children }: SmartLinkProps) => {
  // URL given is a https link
  const isNonRelativeLink =
    href.includes("http://") || href.includes("https://");
  // URL redirects outside of the website
  const router = useRouter();
  const isInternal = href.includes(WEBSITE_URL);

  // This is a internal link that will use client side routing
  if (!isNonRelativeLink) {
    return (
      <Link className="cursor-pointer" href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a
      target={isInternal ? "" : "_blank"}
      rel={isInternal ? "" : "noopener noreferrer"}
      key={name}
      href={href}
      className="cursor-pointer"
    >
      {children}
    </a>
  );
};

export default SmartLink;
