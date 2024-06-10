import "./video.css";
import corporatedata from "../../assets/data/corporate.json";
import fictiondata from "../../assets/data/fiction.json";
import Videodetails from "./Videodetails";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Videocateg from "./Videocateg";
import ButtonCat from "../Elems/Buttons/ButtonCat";

const Video = ({ setSelectedVideo, selectedVideo }) => {
  const openVideoDetails = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoDetails = () => {
    setSelectedVideo(null);
  };

  const [selectedCat, setSelectedCat] = useState("Corporate");

  const handleClick = (title) => {
    setSelectedCat(title);
  };

  return (
    <div className="video-gallery">
      <Helmet>
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
        <>
          <ButtonCat
            title={"Corporate"}
            handleClick={handleClick}
            selectedCat={selectedCat}
          />
          <ButtonCat
            title={"Fiction"}
            handleClick={handleClick}
            selectedCat={selectedCat}
          />
          <Videocateg
            data={selectedCat === "Corporate" ? corporatedata : fictiondata}
            openVideoDetails={openVideoDetails}
          />
        </>
      )}
    </div>
  );
};

export default Video;
