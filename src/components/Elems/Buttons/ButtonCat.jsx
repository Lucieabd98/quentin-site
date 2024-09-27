import "./buttonCat.css";

const ButtonCat = ({ title, handleClick, selectedCat }) => {
  return (
    <h2
      className={selectedCat === title ? "selectedCat" : "not-selected"}
      onClick={() => {
        handleClick(title);
      }}
    >
      {title}
    </h2>
  );
};

export default ButtonCat;
