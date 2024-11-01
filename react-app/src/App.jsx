const ButtonRed = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
      type="submit"
    >
      Buy now
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen gap-x-3 items-center bg-sky-300">
        <ButtonRed></ButtonRed>
        <ButtonRed></ButtonRed>
        <ButtonRed></ButtonRed>
      </div>
    </>
  );
}
export default App;
