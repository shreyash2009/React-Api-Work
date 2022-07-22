import React, { useEffect, useState } from "react";
import ImageShower from "./ImageShower";
import Loading from "./Loading";

import { GoSearch } from "react-icons/go";
import './Unsplash.css'


const clientId= "2RFEJx63MDHcr8LThPKbcNAio86QHgufpgKVCcbowdI"


const UnsplashApp = () => {
  const [name, setName] = useState("");
  const [result,setResults] = useState([]);
  const [loading, setLoading] = useState(false);

const [len,setLen] = useState(1);


  const fetchImages = async (e)=>{
    e.preventDefault();
    const url = "https://api.unsplash.com/search/photos?page="+len+"&query="+name+"&client_id="+clientId;
    setName("")
    try {
        setLoading(true)
        const response = await fetch(url);
        const actualData = await response.json();
        console.log(actualData.results)
        setLoading(false)
        setResults(actualData.results)

        
    } catch (error) {
        console.log("error")
    }
  }
  const changePg = (num)=>{
    setLen(num);
    fetchImages()
  }
  
 
  return (
    <>
      <section id="AppContainer">
        <h1 className="heading">Unsplash Clone</h1>
        <form onSubmit={fetchImages} className="input-container">
          <label htmlFor="query" className="icon"><GoSearch/></label>
          <input
            type="text"
            id="query"
            value={name}
            placeholder="search for image..."
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoComplete="off"
          />
          <button  type="submit"  className="search-btn" >Search</button>
        
        </form>
      </section>

        {loading && <Loading/>}
        
        
        {
            result.length > 0 && (<>
      
            <ImageShower list={result} />
            </>)
        }
        
        
      
    </>
  );
};

export default UnsplashApp;
