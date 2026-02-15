import { useEffect, useRef } from "react";
import "./Videocateg.css";

const Videocateg = ({ openVideoDetails, data, setHidden }) => {
  const videoRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector("img");
            if (img && img.dataset.src) {
              img.src = img.dataset.src;
              img.onload = () => {
                img.classList.add("loaded");
                const skeleton = entry.target.querySelector(".skeleton");
                if (skeleton) skeleton.style.display = "none";
              };
              img.removeAttribute("data-src");
            }

            // Animation en cascade
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px 0px", // précharge avant d'être visible
        threshold: 0.1,
      }
    );

    videoRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="video-gallery">
      {data.map((item, index) => (
        <div
          className="video-item"
          key={item.miniature}
          onClick={() => {
            openVideoDetails(item);
            setHidden(true);
          }}
          ref={(el) => (videoRef.current[index] = el)}
        >
          <div className="skeleton"></div>
          <img
            className="miniature-pics"
            data-src={item.miniature}
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
