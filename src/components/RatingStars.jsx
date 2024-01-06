const RatingStars = ({ logementRating }) => {

  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="logement__rating">
      {stars.map((star) => (
        <img
          src="../icons/star-solid.svg"
          alt="icone étoile"
          key={star}
          className={
            logementRating >= star
              ? "rating__star rating__star--colored"
              : "rating__star"
          }
        />
      ))}
    </div>
  );
};

export default RatingStars;
