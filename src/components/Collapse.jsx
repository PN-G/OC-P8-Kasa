import { useState } from "react";
import CollapseContent from "./CollapseContent";

const Collapse = ({ collapseHeader, collapseInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openingState, setOpeningState] = useState(false)

  const toggle = () => {
  setIsOpen(!isOpen)
  setTimeout(() => {
    setOpeningState(!openingState)
  }, 300)
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggle}>
        <h2 className="collapse__title">{collapseHeader}</h2>
        <img
          src="../icons/arrow.svg"
          alt="fleche"
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--opened" : ""
          }`}
        />
      </div>
      <CollapseContent text={collapseInfo} status={isOpen} openingState={openingState} />
    </div>
  );
};

export default Collapse;
