import {NavLink} from "react-router-dom";

export const Navbar = (props) => {
  const {isMobile, isActive, closeMenu} = props;
  return (
    <nav
      onClick={closeMenu}
      className={
        isMobile
          ? isActive
            ? "nav nav_mobile nav_active"
            : "nav nav_mobile"
          : "nav"
      }
    >
      <ul className={isMobile ? "nav__list nav__list_mobile" : "nav__list"}>
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/service">
            Service
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/price">
            Price
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
