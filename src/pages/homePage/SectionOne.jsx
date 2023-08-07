import React from "react";
import macImage from "../../assets/mac.png";

function SectionOne() {
  return (
    <>
      <div className="bg-custom-blue text-white text-center pt-16 pr-16 pl-16">
        <div>
          <h1 className="text-3xl text-extrabold">Seamless international </h1>
          <h1 className="text-3xl text-extrabold">money transfers.</h1>
          <p className="mt-8">
            Send and receive money from anywhere in the world, without the
          </p>
          <p className="mb-8">high fees and long wait times.</p>
        </div>
        <button class="bg-dark-purple hover:bg-purple-600 text-white font-bold text-sm py-2 px-4 mx-4 rounded shadow mb-16 ">
          Create Account
        </button>
        <img src={macImage} alt="mac"></img>
      </div>
    </>
  );
}

export default SectionOne;
