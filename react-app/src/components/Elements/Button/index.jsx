/* eslint-disable react/prop-types */
const Button = (props) => {
  const { warna = "bg-slate-600", children = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${warna} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
