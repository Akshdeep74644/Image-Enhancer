// import React, { useState } from 'react'
import Imageupload from './Imageupload';
import Imagepreview from './Imagepreview';

function Home() {
    // const [uploadImg, setUploadImg] = useState('');
    // const [upenhancedImg, setEnhancedImg] = useState('');
    // const [loader, setLoader] = useState('');
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-7'>
      <div>
        <Imageupload />
      </div>
      <div>
        <Imagepreview  />
      </div>
    </div>
    </>
  )
}

export default Home
