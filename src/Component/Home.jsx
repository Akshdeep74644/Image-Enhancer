import React, { useState } from "react";
import Imageupload from "./Imageupload";
import Imagepreview from "./Imagepreview";
import {enhancedApical} from '../Api/apiCall'

function Home() {
  const [uploadImg, setUploadImg] = useState(null);
  const [enhancedImg, setEnhancedImg] = useState(null);
  const [loader, setLoader] = useState(false);

  const UploadImageHandler = async (imageUrl)=>{
    setUploadImg(imageUrl)
    setLoader(true);
    try {
        const enhancedImage = await enhancedApical(imageUrl);
        setEnhancedImg(enhancedImage);
        setLoader(false);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7">
        <div>
          <Imageupload UploadImageHandler={UploadImageHandler} />
        </div>
        <div>
          <Imagepreview
            uploadImg={uploadImg}
            enhancedImg={enhancedImg}
            loader={loader}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
