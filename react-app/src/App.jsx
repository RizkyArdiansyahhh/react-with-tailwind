import Button from "./components/Elements/Button";

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
