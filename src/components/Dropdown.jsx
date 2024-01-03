import { useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="dropdown__title">test</h2>
        <img
          src="./icons/arrow.svg"
          alt="icone fleche"
          className="dropdown__arrow"
        />
      </div>
      <div className={`menu ${isOpen ? "dropdown__content" : "dropdown__content--closed"}`}>
        <p className="dropdown__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
          earum. Quam, temporibus nihil sapiente numquam ipsum doloremque eos,
          distinctio unde autem aliquid impedit accusantium quis cumque ea quos
          illo nisi.
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
