function CollapseContent({ text, status, openingState }) {

if (status === false && openingState === false) {
      return null;
  } else {
    return (
      <div
        className={`collapse__content ${
          status ? "" : "collapse__content--closed"
        }`}
      >
        <p className="collapse__text">{text}</p>
      </div>
    );
  }
}

export default CollapseContent;
