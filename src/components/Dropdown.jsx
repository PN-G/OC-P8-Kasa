import { useState } from "react";

const Dropdown = ({ dropdownInfo }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="dropdown__title">{dropdownInfo.title}</h2>
        <img
          src="./icons/arrow.svg"
          alt="icone fleche"
          className="dropdown__arrow"
        />
      </div>
      <div className={`menu ${isOpen ? "dropdown__content" : "dropdown__content--closed"}`}>
        <p className="dropdown__text">{dropdownInfo.content}</p>
      </div>
    </div>
  );
};

export default Dropdown;
