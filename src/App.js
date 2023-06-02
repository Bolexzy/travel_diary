import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import data from "./data";

function App() {
  const placeElements = data.map((place) => {
    return <Main place={place} />;
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-slate-200 ">
      <Nav />
      <div className="flex flex-col justify-around items-start w-5/6 sm:w-4/6  h-full space-y-10 my-10">
        {placeElements}
      </div>
    </div>
  );
}

export default App;
