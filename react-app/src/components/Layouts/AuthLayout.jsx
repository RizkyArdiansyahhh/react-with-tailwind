/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen gap-x-3 items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-1xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-3">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const text =
    type === "login" ? "Don't have an account" : "Already have an account";
  const link = type === "login" ? "register" : "login";

  return (
    <div className="text-center mt-5 text-slate-500">
      <p>
        {text}
        <Link className="font-bold text-sky-500" to={`/${link}`}>
          {link}
        </Link>
      </p>
    </div>
  );
};
export default AuthLayout;
