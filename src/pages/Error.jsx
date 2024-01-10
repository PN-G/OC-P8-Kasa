import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = `Kasa - Erreur 404`;
  }, []);

  return (
    <div>
      <Navigation />
      <div className="error-message">
        <h1 className="error-message__title">404</h1>
        <h2 className="error-message__subtitle">
          Oups! La page que vous demandez n&apos;existe pas.
        </h2>
        <NavLink to="/">
          <p className="error-message__link">
            Retourner sur la page d&apos;accueil
          </p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
