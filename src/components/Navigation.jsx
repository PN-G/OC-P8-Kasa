import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <header className="header">
      <div className="header__logo">
      <NavLink to="/">
      <Logo />
      </NavLink>
      </div>
      <ul className="header__navlinks">
        <NavLink to="/">
          <li className="navlinks__link">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="navlinks__link">A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
