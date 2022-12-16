import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="mx-auto mt-4 lg:max-w-3xl">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default Header;
