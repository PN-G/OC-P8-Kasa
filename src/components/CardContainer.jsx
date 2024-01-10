import Card from "./Card";
import data from "../data/logements.json";

const CardContainer = () => {
  return (
    <div className="card-container">
      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default CardContainer;
