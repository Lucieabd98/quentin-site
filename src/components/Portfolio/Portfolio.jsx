import "./portfolio.css";
import Video from "./Video";
import Audio from "./Audio";
import Contact from "../Contact/Contact";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";

const Portfolio = () => {
  const [selectedButton, setSelectedButton] = useState("Video");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <div className="portfolio-main">
      <Helmet>
        <meta
          name="description"
          content="Découvrez les projets musicaux de Quentin Abadia dans son portfolio."
        />
      </Helmet>
      <div className="portfolio-container">
        <hr />
        <div className="button-div">
          <button
            className={`video ${selectedButton === "Video" ? "selected" : ""}`}
            onClick={() => {
              handleClick("Video");
            }}
          >
            Vidéo
          </button>
          <button
            className={`audio ${selectedButton === "Audio" ? "selected" : ""}`}
            onClick={() => {
              handleClick("Audio");
            }}
          >
            Audio
          </button>
        </div>
      </div>
      <div className="portfolio-content">
        {selectedButton === "Video" ? (
          <Container>
            <Video
              selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo}
            />
          </Container>
        ) : (
          <Audio />
        )}
      </div>
      <Contact />
    </div>
  );
};

export default Portfolio;
