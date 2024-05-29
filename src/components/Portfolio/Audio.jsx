import "./audio.css";

import data from "../../assets/data/audios.json";

const Audio = ({ selectedAudio, setSelectedAudio }) => {
  return (
    <div className="audio-gallery">
      {selectedAudio ? (
        <p>coucou</p>
      ) : (
        data.map((audio) => {
          return (
            <div key={audio.titre} className="audio-details">
              <iframe
                className="podcast"
                width="40%"
                height="235"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src={audio.link}
              ></iframe>
              <h3>{audio.titre}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Audio;
