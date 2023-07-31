import {Socials} from "./Socials";

export const Footer = () => {
  const dateYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <a href="https://github.com/DoYouLikeMe" className="footer__link">
            <span>&#xa9;</span>
            <span>{dateYear}</span>
            <span>github</span>
          </a>
          <a href="https://rs.school/" className="footer__link">
            Roling Scopes
          </a>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
