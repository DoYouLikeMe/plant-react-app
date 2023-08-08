import {Logo} from "@/components/Logo";
import {Navbar} from "@/components/Navbar";
import {MobileMenu} from "@/components/MobileMenu";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Logo />
          <Navbar />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
