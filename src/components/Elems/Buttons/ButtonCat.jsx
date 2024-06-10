import "./buttonCat.css";

const ButtonCat = ({ title, handleClick, selectedCat }) => {
  return (
    <div className="container-cat">
      <button
        className={selectedCat === title ? "selectedCat" : "not-selected"}
        onClick={() => {
          handleClick(title);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonCat;
