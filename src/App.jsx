import "./App.css";
import Container from "@mui/material/Container";
import { Element } from "react-scroll";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Quentin Abadia</title>
        <meta
          name="description"
          content="Le site de Quentin Abadia, producteur son et compositeur, vous plonge dans un univers musical unique. Découvrez son portfolio diversifié et explorez ses créations sonores originales, allant de l'identité musicale d'entreprises et de produits au montage audio de projets artistiques. Contactez Quentin pour collaborer sur votre prochain projet musical et donnez vie à vos idées avec sa passion et son expertise."
        />
        <meta property="og:title" content="Quentin Abadia - Producteur son" />
        <meta
          property="og:description"
          content="Le site de Quentin Abadia, producteur son et compositeur, vous plonge dans un univers musical unique. Découvrez son portfolio diversifié et explorez ses créations sonores originales, allant de l'identité musicale d'entreprises et de produits au montage audio de projets artistiques. Contactez Quentin pour collaborer sur votre prochain projet musical et donnez vie à vos idées avec sa passion et son expertise."
        />
        <meta property="og:url" content="https://quentin-abadia.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://quentin-abadia.netlify.app/imgs/first-sight-site.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quentin Abadia - Producteur son" />
        <meta
          name="twitter:description"
          content="Le site de Quentin Abadia, producteur son et compositeur, vous plonge dans un univers musical unique. Découvrez son portfolio diversifié et explorez ses créations sonores originales, allant de l'identité musicale d'entreprises et de produits au montage audio de projets artistiques. Contactez Quentin pour collaborer sur votre prochain projet musical et donnez vie à vos idées avec sa passion et son expertise."
        />
        <meta
          name="twitter:image"
          content="https://quentin-abadia.netlify.app/imgs/first-sight-site.png"
        />
      </Helmet>
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
