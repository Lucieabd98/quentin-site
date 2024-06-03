import "./portfolio.css";
import Separator from "../Elems/Separator/Separator";
import Video from "./Video";
import Audio from "./Audio";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  const [selectedButton, setSelectedButton] = useState("Video");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoDetailsRef = useRef(null); // Référence à l'élément de détail de la vidéo

  const handleClick = (title) => {
    setSelectedButton(title);
  };

  useEffect(() => {
    if (selectedVideo) {
      // Faites défiler la fenêtre jusqu'au début du composant de détails de la vidéo
      const headerHeight = 80; // Taille du header en pixels
      const topPosition =
        videoDetailsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - headerHeight, behavior: "smooth" });
    }
  }, [selectedVideo]);

  return (
    <div ref={videoDetailsRef}>
      <Helmet>
        <title>Portfolio - Quentin Abadia</title>
        <meta
          name="description"
          content="Découvrez les projets musicaux de Quentin Abadia dans son portfolio."
        />
      </Helmet>
      <div className="buttons-portfolio">
        <button
          className={selectedButton === "Video" ? "selected" : "not-selected"}
          onClick={() => {
            handleClick("Video");
          }}
        >
          Vidéos
        </button>
        <button
          className={selectedButton === "Audio" ? "selected" : "not-selected"}
          onClick={() => {
            handleClick("Audio");
          }}
        >
          Audios
        </button>
      </div>
      <div className="portfolio-content">
        {selectedButton === "Video" ? (
          <Video
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        ) : (
          <Audio />
        )}
      </div>
      <Separator />
    </div>
  );
};

export default Portfolio;
