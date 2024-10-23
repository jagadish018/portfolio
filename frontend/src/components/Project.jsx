import React from "react";
import Tabs from "./Tabs";

export default function Project() {
  return (
    <div className=" h-screen bg-cover bg-center bg-[url('/04.jpg')] flex items-center ">
      <div className="w-[1000px] h-[700px] mx-auto ">
        <div className="mt-10  flex font-bold  text-white  text-[60px] items-center justify-center">
          Projects
        </div>
        <Tabs />
      </div>
    </div>
  );
}
