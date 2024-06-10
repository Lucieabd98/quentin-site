import "./audioCateg.css";

const Audiocateg = ({ data }) => {
  return (
    <div className="audio-gallery">
      {data.map((audio) => (
        <div key={audio.titre} className="audio-details">
          <iframe
            className="podcast"
            height="235"
            scrolling="no"
            frameBorder="no"
            allow="autoplay; encrypted-media"
            src={audio.link}
          ></iframe>
          <h3 className="text">{audio.titre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Audiocateg;
