/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-1xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-3">
        Welcome, Please enter your details
      </p>
      {children}
    </div>
  );
};
export default AuthLayout;
