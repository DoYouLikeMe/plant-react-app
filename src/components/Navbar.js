import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link nav__link_active" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/about">
            About us
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/service">
            Service
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/price">
            Price
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
