import React, { useState } from "react";
import Imageupload from "./Imageupload";
import Imagepreview from "./Imagepreview";

function Home() {
  const [uploadImg, setUploadImg] = useState("#");
  const [upenhancedImg, setEnhancedImg] = useState("#");
  const [loader, setLoader] = useState("#");

  const UploadImageHandler = (imageUrl)=>{
    setUploadImg(imageUrl)
    setEnhancedImg("#")
    setLoader("#")
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
            upenhancedImg={upenhancedImg}
            loader={loader}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
