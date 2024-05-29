import("./buttonDef.css");

const ButtonDef = ({
  title,
  setSelectedDef,
  setSelectedButton,
  text,
  isSelected,
}) => {
  const handleClick = (text, title) => {
    setSelectedDef(text);
    setSelectedButton(title);
  };
  return (
    <button
      className={isSelected ? "selected" : "notSelected"}
      onClick={() => {
        handleClick(text, title);
      }}
    >
      {title}
    </button>
  );
};

export default ButtonDef;
