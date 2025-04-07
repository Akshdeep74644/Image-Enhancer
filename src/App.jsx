import React from 'react'
import Home from './Component/Home';

function App() {
  return (
    <>
      <div id="mainbox" className='flex bg-zinc-800 text-[#f9f9f9] justify-center items-center flex-col gap-8 w-screen h-screen'>
        <div className="header text-center leading-8">
         <h1 className=' text-6xl'>The photo quality enhancer</h1>
         <p>upload your image and AI enhanced it quality!</p>
        </div>
        <Home />
        <div className="footer text-2xl">
          <h1>Made by @akshdeep74644</h1>
        </div>
      </div>
    </>
  )
}

export default App
