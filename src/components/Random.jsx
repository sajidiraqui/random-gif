import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";

const Random = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
const[gif,setGif]=useState('');
const[loading,setLoading]=useState(false);
async function fetchData(){
    setLoading(true);
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   const {data} = await axios.get(url);
   const imageSource=data.data.images.downsized_large.url;
   setGif(imageSource);
   setLoading(false);
}

useEffect(()=>{
    fetchData();
},[])
function clickHandler(){
    fetchData();
}

  return (
    <div className="bg-green-500 w-1/2  rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] overflow-x-auto overflow-y-auto">
        <h1 className="text-3xl underline uppercase font-bold">A Random Fig</h1>
        {
        
        loading?(<Spinner></Spinner>):(<img  src={gif} width="450px" height="450px"/>)
        }
        <button className="w-10/12 bg-yellow-500 boreder border-black rounded-lg p-1 mb-1" onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
