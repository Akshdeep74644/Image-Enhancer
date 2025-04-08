import React, { useState } from "react";
import Imageupload from "./Imageupload";
import Imagepreview from "./Imagepreview";

function Home() {
  const [uploadImg, setUploadImg] = useState("");
  const [enhancedImg, setEnhancedImg] = useState("");
  const [loader, setLoader] = useState(false);

  const UploadImageHandler = (imageUrl)=>{
    setUploadImg(imageUrl)
    setEnhancedImg("#")
    setLoader(true)
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
