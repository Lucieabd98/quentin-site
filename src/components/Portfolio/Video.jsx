import "./video.css";
import data from "../../assets/data/videos.json";
import Videodetails from "./Videodetails";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Video = ({ setSelectedVideo, selectedVideo }) => {
  const openVideoDetails = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoDetails = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-gallery">
      <Helmet>
        <title>Vidéos - Quentin Abadia</title>
        <meta
          name="description"
          content="Découvrez les projets musicaux en vidéos de Quentin Abadia dans son portfolio."
        />
      </Helmet>
      {selectedVideo ? (
        <div className="video-details-container">
          <Videodetails video={selectedVideo} onClose={closeVideoDetails} />
        </div>
      ) : (
        data.map((video) => (
          <div
            className="video-item"
            key={video.miniature}
            onClick={() => openVideoDetails(video)}
          >
            <img
              className="miniature-pics"
              src={video.miniature}
              alt={video.titre}
            />
            <div className="overlay">
              <div className="text">{video.titre}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Video;
