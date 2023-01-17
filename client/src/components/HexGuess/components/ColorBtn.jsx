const ColorBtn = ({ text, onClick }) => {
  return (
    <button className="color-btn" onClick={onClick} key={text}>
      {text}
    </button>
  );
};

export default ColorBtn;
