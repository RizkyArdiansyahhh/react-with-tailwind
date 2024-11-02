/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title, text, link } = props;
  return (
    <div className="flex justify-center min-h-screen gap-x-3 items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-1xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-3">
          Welcome, Please enter your details
        </p>
        {children}
        <div className="text-center mt-5 text-slate-500">
          <p>
            {text}
            <a className="font-bold text-sky-500" href={link}>
              {title}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
