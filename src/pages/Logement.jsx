import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/logements.json";
import { useEffect } from "react";

const Logement = () => {
    const navigate = useNavigate();
    const id = useParams();
    const current = data.filter(logement => logement.id === id.logementId);

    useEffect(() => {
        document.title = `Kasa - Logement ${id.logementId}`;
        []
      });

    useEffect(() => {
        if (current.length === 0) {
        navigate("/error");
        [current]}
      });

    return (
    <div>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Logement;
