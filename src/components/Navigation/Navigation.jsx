import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";
import header from "../../assets/imgs/logo-header.png";

const Navigation = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img src={header} alt="quentin abadia logo" />
      </Link>

      <div className="sub-header">
        <div className="header-titles">
          <h1>composition musicale · </h1>
          <h1>production sonore · </h1>
          <h1>sound design</h1>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
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
