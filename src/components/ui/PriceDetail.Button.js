import {useState, useRef, useEffect} from "react";

export const PriceDetailsButton = () => {
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
        Basics<span className="tabDetail__arrow"></span>
      </summary>
      <div className="tabDetail__content">
        <p className="tabDetail__description">
          Release of Letraset sheets containing Lorem Ipsum passages, and more
          recently
        </p>
        <p className="tabDetail__sum">
          <span>$15</span> / per hour
        </p>
        <a href="#contacts" className="tabDetail__btn">
          Order
        </a>
      </div>
    </details>
  );
};
