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

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen gap-x-3 items-center bg-sky-300">
        <Button warna="bg-red-500">Login</Button>
        <Button warna="bg-lime-500">Logout</Button>
        <Button></Button>
      </div>
    </>
  );
}
export default App;
