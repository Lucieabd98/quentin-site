import "./Videocateg.css";

const Videocateg = ({ openVideoDetails, data, setHidden }) => {
  return (
    <div className="video-gallery">
      {data.map((item) => (
        <div
          className="video-item"
          key={item.miniature}
          onClick={() => {
            openVideoDetails(item);
            setHidden(true);
          }}
        >
          <img
            className="miniature-pics"
            src={item.miniature}
            alt={item.titre}
          />
          <div className="overlay">
            <div className="text-overlay">{item.titre}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videocateg;
