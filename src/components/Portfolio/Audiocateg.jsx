import { useEffect, useRef } from "react";
import "./audioCateg.css";

const Audiocateg = ({ data }) => {
  const audioRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const iframe = entry.target.querySelector("iframe");
            const skeleton = entry.target.querySelector(".audio-skeleton");

            if (iframe && iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.onload = () => {
                iframe.classList.add("audio-loaded");
                if (skeleton) skeleton.style.display = "none";
              };
              iframe.removeAttribute("data-src");
            }

            // animation en cascade
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.1,
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
          <div className="audio-frame-wrapper">
            <div className="audio-skeleton"></div>
            <iframe
              className="podcast audio-fade-start"
              data-src={audio.link}
              scrolling="no"
              frameBorder="no"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
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
