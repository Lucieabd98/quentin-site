import { useEffect, useRef } from "react";
import "./Videocateg.css";

const Videocateg = ({ openVideoDetails, data, setHidden }) => {
  const videoRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector("img");
            if (img && img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              img.classList.add("fade-in");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.9,
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
