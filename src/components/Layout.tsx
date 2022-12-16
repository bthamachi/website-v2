import { ReactNode } from "react";

import Header from "@/components/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="container mx-auto min-h-screen p-4">
      <Header />
      <div className="prose mx-auto mt-10 max-w-3xl dark:prose-invert sm:mt-10">
        {children}
      </div>
    </main>
  );
};

export default Layout;
