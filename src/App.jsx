import "./App.css";
import Container from "@mui/material/Container";
import { Element } from "react-scroll";

// Impport des composants

import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// Import des icônes
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark, faPaperPlane);

function App() {
  return (
    <>
      <Header />
      <Container>
        <Definitions />
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Container>
    </>
  );
}

export default App;
