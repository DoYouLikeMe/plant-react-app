import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";

export const PriceDetailsButton = (props) => {
  const {plan, description, price, time} = props;
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef(null);

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
      className="tabDetail"
      {...(isOpen ? {open: true} : {})}
    >
      <summary className="tabDetail__heading" onClick={(e) => handleClick(e)}>
        {plan}
        <span className="tabDetail__arrow"></span>
      </summary>
      <div className="tabDetail__content">
        <p className="tabDetail__description">{description}</p>
        <p className="tabDetail__sum">
          <span>${price}</span> / per {time}
        </p>
        <Link to="/contacts" className="tabDetail__btn">
          Order
        </Link>
      </div>
    </details>
  );
};
