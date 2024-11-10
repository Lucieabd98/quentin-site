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
              console.log("Intersection observée pour:", iframe); // Vérification
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute("data-src");

              // Supprimer la classe initiale et ajouter la classe de fondu
              iframe.classList.remove("audio-fade-start");
              iframe.classList.add("audio-fade-in");
              console.log("Classe audio-fade-in appliquée :", iframe); // Vérification
            }
            observer.unobserve(entry.target); // Arrêter d’observer cet élément
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
          <h3 className="text">{audio.titre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Audiocateg;
