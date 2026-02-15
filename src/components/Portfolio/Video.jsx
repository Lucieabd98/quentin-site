import "./video.css";
import corporatedata from "../../assets/data/corporate.json";
import Videodetails from "./Videodetails";
import { Helmet } from "react-helmet";
import Videocateg from "./Videocateg";

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
        <meta
          name="description"
          content="Découvrez les projets musicaux en vidéos de Quentin Abadia dans son portfolio."
        />
      </Helmet>
      <Videocateg data={corporatedata} openVideoDetails={openVideoDetails} />
      {selectedVideo && (
        <Videodetails video={selectedVideo} onClose={closeVideoDetails} />
      )}
    </div>
  );
};

export default Video;
