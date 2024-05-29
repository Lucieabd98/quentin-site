import "./about.css";
import Separator from "../Elems/Separator/Separator";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2>À propos</h2>
        <div className="about-text">
          <p>
            Qu’il s’agisse d’un élément de sound design, d’un logo, d’une
            identité sonore ou d’une bande originale, la production musicale
            requiert autant de qualités d’instrumentiste et de technicien que de
            facultés à comprendre les besoins de chaque projet.
          </p>
          <p>
            Après avoir étudié le violon et l’orchestre au conservatoire, la
            musicologie à la Sorbonne puis la musique de film à l’Université du
            Quebec à Montréal, j’accompagne mes clients dans chaque étape de la
            production sonore afin que toutes nos collaborations sonnent juste.
          </p>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default About;
