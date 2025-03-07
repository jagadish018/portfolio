import React, { useState } from "react";

function Cards(props) {
  return (
    <div className="conatiner flex items-center justify-center">
      <div className=" p-2 w-[600px] h-[300px] bg-gray-400 rounded-[20px]">
        <div className="   w-full h-full text-black">
          <h1
            className="w-[550px] h-14 flex  mr-15
                   justify-start items-center font-bold text-[30px]"
          >
            {props.front}
          </h1>
          <br />
          <p className="w-[550px] h-40 flex mr-15 justify-start items-start text-[20px]">
            {props.back}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
