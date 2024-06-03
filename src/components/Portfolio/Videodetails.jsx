import "./videodetails.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

const Videodetails = ({ video, onClose }) => {
  return (
    <div className="video-details">
      <Helmet>
        <title>Vidéos - Quentin Abadia</title>
        <meta
          name="description"
          content="Regardez une vidéo dont le son a été composé et produit par Quentin Abadia"
        />
      </Helmet>
      <div className="close-container">
        <button onClick={onClose} className="close-video-button">
          <FontAwesomeIcon icon="xmark" className="icon-cross" />
        </button>
      </div>
      <h2>{video.titre}</h2>
      <iframe
        title="vimeo-player"
        src={video.link}
        width="100%"
        height="360"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
      <div className="video-details-description">
        <p dangerouslySetInnerHTML={{ __html: video.description }}></p>
      </div>
    </div>
  );
};

export default Videodetails;
