import "./audio.css";
import ButtonCat from "../Elems/Buttons/ButtonCat";
import Audiocateg from "./Audiocateg";
import podcastdata from "../../assets/data/podcast.json";
import musicdata from "../../assets/data/music.json";
import { useState } from "react";

const Audio = () => {
  const [selectedCat, setSelectedCat] = useState("Podcast");

  const handleClick = (title) => {
    setSelectedCat(title);
  };

  return (
    <div className="audio-gallery">
      <>
        <div className="button-audio-gallery">
          <ButtonCat
            title={"Podcast"}
            handleClick={handleClick}
            selectedCat={selectedCat}
          />
          <ButtonCat
            title={"Musique"}
            handleClick={handleClick}
            selectedCat={selectedCat}
          />
        </div>

        <Audiocateg
          data={selectedCat === "Podcast" ? podcastdata : musicdata}
        />
      </>
    </div>
  );
};

export default Audio;
