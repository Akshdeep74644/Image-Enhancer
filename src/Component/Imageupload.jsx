import React from 'react'

function Imageupload() {
  return (
    <>
      <div className='bg-zinc-900 flex justify-center items-center flex-col p-8 px-20 rounded-2xl font-semibold text-zinc-900'>
        <label htmlFor="uploadInput" >
            <p className='p-2 px-8 rounded-2xl p-6 bg-zinc-800 text-[#f9f9f9] rounded-xl cursor-pointer'>Check here to drop your image.</p>
        </label>
        <input type="file" id='uploadInput'  className='hidden'/>
      </div>
    </>
  )
}

export default Imageupload
