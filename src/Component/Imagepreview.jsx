import React from 'react'

function Imagepreview() {
  return (
    <>
      <div className='flex gap-10'>
        <div className='w-[400px] bg-zinc-700 rounded-xl relative  h-[400px]'>
            <span className='px-5 absolute bg-zinc-200 text-zinc-800 rounded-b-full py-2'>
                Upload
            </span>
            <img src="https://picsum.photos/id/237/200/300" className='bg-cover rounded-xl w-full h-full' alt="" />
        </div>
        <div className='w-[400px] bg-zinc-700 relative rounded-xl  h-[400px]'>
        <span className='px-5 absolute bg-zinc-200 text-zinc-800 rounded-b-full py-2'>
                Enhanced
            </span>
            <img src="https://picsum.photos/id/237/200/300" className='bg-cover rounded-xl w-full h-full' alt="" />
        </div>
      </div>
    </>
  )
}

export default Imagepreview
