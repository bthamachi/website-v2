import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="container mx-auto min-h-screen p-4">
      <Header />
      <div className="mx-auto mt-10 max-w-3xl sm:mt-10">{children}</div>
    </main>
  );
};

export default Layout;
