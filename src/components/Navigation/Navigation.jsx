import "./Navigation.css";
import { NavLink } from "react-router-dom";
import header from "../../assets/imgs/logo-header.png";

const Navigation = () => {
  return (
    <header className="header-container">
      <div className="header">
        <img src={header} alt="quentin abadia logo" />
      </div>
      <div className="sub-header">
        <div className="header-titles">
          <h1>composition musicale ·&nbsp;</h1>
          <h1> production sonore ·&nbsp; </h1>
          <h1> sound design</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" end>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">À propos</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
