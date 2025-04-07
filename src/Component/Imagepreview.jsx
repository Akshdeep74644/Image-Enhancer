import React from 'react'

function Imagepreview(props) {
  return (
    <>
      <div className='flex gap-10'>
        <div className='w-[400px] bg-zinc-700 rounded-xl relative  h-[400px]'>
            <span className='px-5 absolute bg-zinc-200 text-zinc-800 rounded-b-full py-2'>
                Upload
            </span>
            <img src={props.uploadImg} className='bg-cover bg-center rounded-xl w-full h-full' alt="" />
        </div>
        <div className='w-[400px] bg-zinc-700 relative rounded-xl  h-[400px]'>
        <span className='px-5 absolute bg-zinc-200 text-zinc-800 rounded-b-full py-2'>
                Enhanced
            </span>
            <img src="" className='bg-cover rounded-xl w-full h-full' alt="" />
        </div>
      </div>
    </>
  )
}

export default Imagepreview
