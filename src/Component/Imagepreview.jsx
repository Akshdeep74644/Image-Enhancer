import React from "react";
import Loader from './Loader'

function Imagepreview(props) {
  return (
    <>
      <div className="flex gap-10">
        <div className="w-[500px] flex justify-center items-center bg-zinc-700 rounded-xl relative  h-[500px]">
          <span className="px-5 absolute top-0 left-0 bg-zinc-200 text-zinc-800 rounded-lg py-2">
            Uploaded
          </span>
          {props.uploadImg ? <img src={props.uploadImg} className="bg-cover bg-center rounded-xl w-full h-full"/> : (<div>No Uploaded Image</div>)
          }
        </div>
        <div className="w-[500px] flex justify-center items-center bg-zinc-700 relative rounded-xl  h-[500px]">
          <span className="px-5 absolute top-0 left-0 bg-zinc-200 text-zinc-800 rounded-lg py-2">
            Enhanceded
          </span>
          {props.enhancedImg && !props.loader && <img src={props.enhancedImg} className="bg-cover rounded-xl w-full h-full" />}

          {props.loader ? <Loader /> : <div>No Enhanced Image</div>}
        </div>
      </div>
    </>
  );
}

export default Imagepreview;
