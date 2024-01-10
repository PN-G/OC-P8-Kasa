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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "navlinks__link navlinks__link--active"
              : "navlinks__link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "navlinks__link navlinks__link--active"
              : "navlinks__link"
          }
          to="/about"
        >
          A Propos
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
