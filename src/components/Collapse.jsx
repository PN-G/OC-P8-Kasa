import { useState } from "react";

const Collapse = ({collapseHeader, collapseInfo}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{collapseHeader}</h2>
        <img
          src="../icons/arrow.svg"
          alt="fleche"
          className="collapse__arrow"
        />
      </div>
      <div className={`menu ${isOpen ? "collapse__content" : "collapse__content--closed"}`}>
        <p className="collapse__text">{collapseInfo}</p>
      </div>
    </div>
  );
};

export default Collapse;
