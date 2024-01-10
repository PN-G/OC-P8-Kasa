const Banner = (props) => {
  const { imgUrl, headline } = props;
  return (
    <div className="banner">
      <img src={"./img/" + imgUrl} alt="" className="banner__img" />
      <h1 className="banner__header">{headline}</h1>
    </div>
  );
};

export default Banner;
