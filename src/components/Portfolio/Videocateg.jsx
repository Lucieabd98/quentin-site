import "./Videocateg.css";

const Videocateg = ({ openVideoDetails, data }) => {
  return (
    <div className="video-gallery">
      {data.map((item) => (
        <div
          className="video-item"
          key={item.miniature}
          onClick={() => openVideoDetails(item)}
        >
          <img
            className="miniature-pics"
            src={item.miniature}
            alt={item.titre}
          />
          <div className="overlay">
            <div className="text">{item.titre}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videocateg;
