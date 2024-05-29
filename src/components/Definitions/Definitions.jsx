import "./definitions.css";
import ButtonDef from "../Elems/Buttons/ButtonDef";
import Separator from "../Elems/Separator/Separator";
import text from "../../assets/data/definitions.json";
import { useState } from "react";

const Definitions = () => {
  const [selectedDef, setSelectedDef] = useState(text.composition);
  const [selectedButton, setSelectedButton] = useState("Composition");

  return (
    <>
      <div className="definitions">
        <div className="definitions-buttons">
          <div className="left-column">
            <ButtonDef
              title="Composition"
              setSelectedDef={setSelectedDef}
              setSelectedButton={setSelectedButton}
              text={text.composition}
              isSelected={selectedButton === "Composition"}
            />
            <ButtonDef
              title="Identité musicale"
              setSelectedDef={setSelectedDef}
              setSelectedButton={setSelectedButton}
              text={text.identiteMusicale}
              isSelected={selectedButton === "Identité musicale"}
            />
          </div>
          <div className="right-column">
            <ButtonDef
              title="Conception Sonore"
              setSelectedDef={setSelectedDef}
              setSelectedButton={setSelectedButton}
              text={text.conceptionSonore}
              isSelected={selectedButton === "Conception Sonore"}
            />
            <ButtonDef
              title="Montage audio"
              setSelectedDef={setSelectedDef}
              setSelectedButton={setSelectedButton}
              text={text.montageAudio}
              isSelected={selectedButton === "Montage audio"}
            />
          </div>
        </div>
        <div className="definitions-texts">
          <p dangerouslySetInnerHTML={{ __html: selectedDef }}></p>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Definitions;
