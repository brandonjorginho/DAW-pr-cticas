import React, { useState } from 'react'

const UseStateSection = () => {
  const [count, setCount] = useState(0);
  const increment=()=>{
    setCount(count+1)
  }
  return (
    <section className='mt-5'>
        <h3 className='text-gray-300 text-2xl font-title'>UseState</h3>
        <p className='text-gray-400'>Ejemplo básico de UseState</p>
        <div className="p-2 flex items-center space-x-5">
            <button className='Button font-title p-2' onClick={increment}>Incrementar</button>
            <p className="text-7xl text-gray-300 font-title">{count}</p>
        </div>
    </section>
  )
}

export default UseStateSection
