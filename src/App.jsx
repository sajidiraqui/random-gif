import Random from "./components/Random";
import Tag from "./components/Tag";
import "./App.css";
function App() {
  return (
    <div className=" w-[100vw] m-0 p-0 h-[100vh] flex flex-col background relative overflow-hidden items-center  ">
      <h1 className="absolute px-10 py-2 text-3xl font-bold bg-white rounded-lg w-11/12 text-center mx-auto mt-[35px] overflow-auto">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col mt-[90px] w-2/3 ml-[450px]  ">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
