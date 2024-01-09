import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import { useEffect } from "react";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStars";
import Error from "./Error";

const Logement = () => {
  const id = useParams();
  const findId = data.find((logement) => logement.id === id.logementId);

  useEffect(() => {
    document.title = `Kasa - Logement ${id.logementId}`;
  }, [id.logementId]);

  if (findId === undefined) {
    return <Error />;
  } else {
    return (
      <div>
        <Navigation />
        <Carrousel Key="carrousel" logement={findId} />

        <main className="logement">
          <div key="logement-main-container" className="logement__main">
            <div key="header-container" className="logement__header">
              <h1 className="logement__title">{findId.title}</h1>
              <p key={findId.location} className="logement__location">
                {findId.location}
              </p>
            </div>
            <div key="host-container" className="logement__host">
              <p key={findId.host.name} className="host__name">
                {findId.host.name}
              </p>
              <img
                key={findId.host.picture}
                src={findId.host.picture}
                alt={findId.host.name}
                className="host__picture"
              />
            </div>
            <div key="tags-container" className="logement__tags">
              {findId.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <div key="rating-container" className="logement__rating">
              <RatingStars logementRating={findId.rating} />
            </div>
            <div key="collapse-container" className="logement__collapse">
              <Collapse
                key="collapse-description"
                collapseHeader="Description"
                collapseInfo={findId.description}
              />
              <Collapse
                key="collapse-equipments"
                collapseHeader="Equipements"
                collapseInfo={findId.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default Logement;
