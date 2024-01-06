import { useState } from "react";

const Carrousel = ({ logement }) => {
  const pictures = logement[0].pictures;
  const [currentPictureId, setCurrentPictureId] = useState(0);
  const currentPicture = pictures[currentPictureId];

  const handlePrevPicture = () => {
    if (currentPictureId === 0) {
        setCurrentPictureId(pictures.length - 1);
      } else {
          setCurrentPictureId(currentPictureId - 1);
      }
  };

  const handleNextPicture = () => {
    if (currentPictureId === pictures.length -1) {
        setCurrentPictureId(0);
      } else {
        setCurrentPictureId(currentPictureId + 1);
      }
  };

  return (
    <div className="carrousel">
      <img
        key={currentPicture}
        src={currentPicture}
        alt="photo"
        className="carrousel__picture"
      />
      <img
        src="../icons/arrow.svg"
        alt="fleche de gauche"
        className="carrousel__arrow carrousel__arrow--left"
        onClick={handlePrevPicture}
      />
      <img
        src="../icons/arrow.svg"
        alt="fleche de droite"
        className="carrousel__arrow carrousel__arrow--right"
        onClick={handleNextPicture}
      />
      <p className="carrousel__info">
        {currentPictureId + 1}/{pictures.length}
      </p>
    </div>
  );
};

export default Carrousel;
