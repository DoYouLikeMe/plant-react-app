import {Logo} from "@/components/Logo";
import {Navbar} from "@/components/Navbar";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
