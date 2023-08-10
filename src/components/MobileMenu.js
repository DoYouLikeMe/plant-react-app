import {Navbar} from "@/components/Navbar";
import {useState} from "react";

export const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const showMenu = () => {
    console.log("clic");
    setIsActive(!isActive);
  };
  return (
    <>
      <button
        onClick={showMenu}
        className={
          isActive
            ? "mobile-menu-btn mobile-menu-btn_active"
            : "mobile-menu-btn"
        }
      >
        Открыть мобильное меню
      </button>
      <Navbar isMobile={true} isActive={isActive} closeMenu={showMenu} />
    </>
  );
};
