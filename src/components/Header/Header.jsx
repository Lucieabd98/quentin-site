import "./header.css";
import { Link } from "react-scroll";

const Header = () => {
  const headerHeight = 80;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header>
      <div className="container">
        <div>
          <h1 onClick={scrollToTop}>Quentin Abadia</h1>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link
                  className="link"
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={-headerHeight}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-headerHeight}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-headerHeight}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
