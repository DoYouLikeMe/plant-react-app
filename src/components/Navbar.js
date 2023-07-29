import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/service">Service</Link>
          <Link to="/price">Price</Link>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
