/* eslint-disable react/prop-types */
const Button = (props) => {
  const {
    classname,
    children = "...",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
