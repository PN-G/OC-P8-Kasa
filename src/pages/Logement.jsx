import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/logements.json";
import { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStars";
import HostCard from "../components/HostCard";
import Tag from "../components/Tag";

const Logement = () => {
  const id = useParams();
  const findId = data.find((logement) => logement.id === id.logementId);
  const navigate = useNavigate();
  const [idExists, setIdExists] = useState(false);

  useEffect(() => {
    if (!findId) {
      navigate("/error");
    } else {
      setIdExists(true);
      document.title = `Kasa - Logement ${findId.id}`;
    }
  }, [findId, navigate]);

  if (idExists) {
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
              <div key="tags-container" className="logement__tags">
                {findId.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
            <div className="logement__host-and-rating">
              <HostCard hostName={findId.host.name} hostPicture={findId.host.picture} />
              <div key="rating-container" className="logement__rating">
                <RatingStars logementRating={findId.rating} />
              </div>
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
