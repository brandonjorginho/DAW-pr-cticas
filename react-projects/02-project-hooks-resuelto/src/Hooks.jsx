import React, { useEffect, useRef, useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(0);
  const ref=useRef();
  // useEffect(() => {
  //   console.log(`Hiciste click ${count} veces`)
  // });
  useEffect(() => {
    console.log('Me ejecuto al renederizar')
  }, []);
  // useEffect(() => {
  //   console.log('Me ejecuto porque count esta variando')
  // }, [count]);
  return (
    <div className="bg-ligth min-vh-100">
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <img src="https://breakingbadquotes.xyz/img/logo.png" alt="" />
        <h1 className="">Breaking Bad APIs</h1>
        <button className="btn btn-success" onClick={()=>setCount(count+1)}>Recargar</button>
        <h4 ref={ref} onClick={()=>ref.current.style.color='blue'}>{count}</h4>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center px-3">
        <blockquote className="border-left pl-2 text-center" style={{ 
          fontSize:'1.2em'
         }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam ipsum, molestias, ea vero, facilis voluptatibus laborum molestiae provident suscipit dignissimos placeat temporibus iure fugit perspiciatis. Harum fuga perferendis facilis! </blockquote>
         <span>Autor</span>
      </div>
    </div>
  )
}

export default Hooks