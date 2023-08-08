import {useState, useRef, useEffect} from "react";

export const ContactDetails = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef(null);
  const {cities, handler, activeCity} = props;

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!elementRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elementRef]);

  return (
    <details
      ref={elementRef}
      {...(isOpen ? {open: true} : {})}
      className="contact-details"
    >
      <summary
        className={
          activeCity
            ? "contact-details__heading contact-details__heading_active"
            : "contact-details__heading"
        }
        onClick={(e) => handleClick(e)}
      >
        {activeCity ? activeCity : "City"}
        <span className="arrow"></span>
      </summary>
      <div className="contact-details__content">
        <ul className="contact-details__list">
          {cities.map((city, key) => {
            return (
              <li
                key={key}
                onClick={(e) => {
                  handler(city.id);
                  handleClick(e);
                }}
                className="contact-details__item"
              >
                {city.city}
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
};
