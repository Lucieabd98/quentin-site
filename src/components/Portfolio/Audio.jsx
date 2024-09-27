import "./audio.css";

import Audiocateg from "./Audiocateg";
import podcastdata from "../../assets/data/podcast.json";

const Audio = () => {
  return (
    <div>
      <Audiocateg data={podcastdata} />
    </div>
  );
};

export default Audio;
