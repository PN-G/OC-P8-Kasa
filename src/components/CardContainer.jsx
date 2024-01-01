import Card from "./Card";
import data from "../data/logements.json";

const CardContainer = () => {
    return (
        <div className="card-container">
            {data.map((logement, index) => (
                <Card key={index} logement={logement} />
                ))}
        </div>
    );
};

export default CardContainer;