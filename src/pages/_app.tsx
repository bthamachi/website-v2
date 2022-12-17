import { ThemeProvider } from "next-themes";
import type { AppType } from "next/dist/shared/lib/utils";
import "react-tooltip/dist/react-tooltip.css";
import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/prism-theme.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
