import React from "react";
import { ArrowRight } from "iconsax-react";

function ImageLeftSection(props) {
  return (
    <div className="pt-10 md:pt-20 md:px-24 px-10 flex flex-col sm:flex-row sm:space-y-2 md:flex md:space-x-4">
      <div className=" w-full sm:w-1/2 max-w-md ">
        <img className="pt-5 sm:pt-0" src={props.image} alt=""></img>
      </div>
      <div className="w-full sm:w-1/2 sm:pl-10">
        <h2 className="text-dark-purple font-extrabold text-3xl pt-10 pr-0 sm:pt-0 md:pt-20 md:pr-20">
          {props.title}
        </h2>
        <p className="pt-5 pr-20 ">{props.description}</p>
        <div className="flex items-center pt-5">
          <p className="text-dark-purple font-extrabold pr-2">Learn More</p>
          <ArrowRight size="25" color="#6936F5" />
        </div>
      </div>
    </div>
  );
}

export default ImageLeftSection;
