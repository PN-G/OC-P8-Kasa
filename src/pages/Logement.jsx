import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/logements.json";
import { useEffect } from "react";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStars";

const Logement = () => {
  const navigate = useNavigate();
  const id = useParams();
  const currentId = data.filter((logement) => logement.id === id.logementId);

  useEffect(() => {
    document.title = `Kasa - Logement ${id.logementId}`;
    [];
  });

  useEffect(() => {
    if (currentId.length === 0) {
      navigate("/error");
      [currentId];
    }
  });

  return (
    <div>
      <Navigation />
      <Carrousel logement={currentId}/>
      <main className="logement">
        {currentId.map((content) => (
          <div key="logement-main-container" className="logement__main">
            <div key="header-container" className="logement__header">
              <h1 key={content.title} className="logement__title">
                {content.title}
              </h1>
              <p key={content.location} className="logement__location">
                {content.location}
              </p>
            </div>
            <div key="host-container" className="logement__host">
              <p key={content.host.name} className="host__name">
                {content.host.name}
              </p>
              <img
                key={content.host.picture}
                src={content.host.picture}
                alt={content.host.name}
                className="host__picture"
              />
            </div>
            <div key="tags-container" className="logement__tags">
                {content.tags.map((tag, index) => (
                    <div key={index} className="tag">{tag}</div>
                    ))}
            </div>
            <div key="rating-container" className="logement__rating">
                <RatingStars logementRating={content.rating}/>
            </div>
            <div key="collapse-container" className="logement__collapse">
              <Collapse
                key="collapse-description"
                collapseHeader="Description"
                collapseInfo={content.description}
              />
              <Collapse
                key="collapse-equipments"
                collapseHeader="Equipements"
                collapseInfo={content.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              />
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Logement;
