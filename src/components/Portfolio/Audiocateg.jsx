import { useEffect, useRef } from "react";
import "./audioCateg.css";

const Audiocateg = ({ data }) => {
  const audioRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target.querySelector("iframe");
            if (iframe && iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute("data-src");
              iframe.classList.remove("audio-fade-start");
              iframe.classList.add("audio-fade-in");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 20px 0px",
        threshold: 0.3,
      }
    );

    audioRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="audio-gallery">
      {data.map((audio, index) => (
        <div
          key={audio.titre}
          className="audio-details"
          ref={(el) => (audioRef.current[index] = el)}
        >
          <iframe
            className="podcast audio-fade-start"
            data-src={audio.link}
            height="235"
            scrolling="no"
            frameBorder="no"
            allow="autoplay; encrypted-media"
          ></iframe>
          <div className="text-audio">
            <h3 className="text">{audio.titre}</h3>
            <p
              className="description-audio"
              dangerouslySetInnerHTML={{ __html: audio?.description }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Audiocateg;
