import "./App.css";
import Container from "@mui/material/Container";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Remplace `react-helmet` par `react-helmet-async`
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des composants
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Definitions from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

// Import des icônes
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark, faPaperPlane);

function App() {
  return (
    <HelmetProvider>
      {/* Enveloppe l'application avec HelmetProvider */}
      <Helmet>
        <title>Quentin Abadia</title>
        <meta
          name="description"
          content="composition musicale · production sonore · sound design"
        />
        <meta property="og:title" content="Quentin Abadia - Producteur son" />
        <meta
          property="og:description"
          content="composition musicale · production sonore · sound design"
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
          content="composition musicale · production sonore · sound design"
        />
        <meta
          name="twitter:image"
          content="https://quentin-abadia.netlify.app/imgs/first-sight-site.png"
        />
      </Helmet>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<Definitions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
