import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const getQuote=async()=>{
      const response=await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      const data=await response.json();
      setQuote(data[0])
    }
    getQuote();
  }, [refresh]);
  return (
    <div className="bg-ligth min-vh-100">
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <img src="https://breakingbadquotes.xyz/img/logo.png" alt="" />
        <h1 className="">Breaking Bad API</h1>
        <button className="btn btn-success" onClick={()=>setRefresh(!refresh)}>Recargar</button>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center px-3">
        <blockquote className="border-left pl-2 text-center" style={{ 
          fontSize:'1.2em'
         }}>{quote.quote}</blockquote>
         <span>{quote.author}</span>
      </div>
    </div>
  )
}

export default App
