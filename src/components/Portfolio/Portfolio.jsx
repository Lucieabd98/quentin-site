import "./portfolio.css";
import Separator from "../Elems/Separator/Separator";
import Video from "./Video";
import Audio from "./Audio";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import portee from "../../assets/imgs/logo-separator.png";
import { Container } from "@mui/material";

const Portfolio = () => {
  const [selectedButton, setSelectedButton] = useState("Video");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        <img src={portee} alt="" className="wave" />
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
          <Container>
            <Audio />
          </Container>
        )}
      </div>
      <Separator />
    </div>
  );
};

export default Portfolio;
