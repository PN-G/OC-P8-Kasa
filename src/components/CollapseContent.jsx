function CollapseContent({ text, status }) {
  return (
    <div
      className={`collapse__content ${
        status ? "" : "collapse__content--closed"
      }`}
    >
      <p className={`collapse__text ${status ? "" : "collapse__text--hidden"}`}>
        {text}
      </p>
    </div>
  );
}

export default CollapseContent;
