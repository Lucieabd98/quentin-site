import "./buttonCat.css";

const ButtonCat = ({ title, handleClick, selectedCat }) => {
  return (
    <button
      className={selectedCat === title ? "selectedCat" : "not-selected"}
      onClick={() => {
        handleClick(title);
      }}
    >
      {title}
    </button>
  );
};

export default ButtonCat;
