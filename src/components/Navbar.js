import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
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
