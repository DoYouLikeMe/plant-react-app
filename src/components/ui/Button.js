export const Button = (props) => {
  const {text, onClick, isActive} = props;
  return (
    <button onClick={onClick} className={isActive ? "btn btn__active" : "btn"}>
      {text}
    </button>
  );
};
