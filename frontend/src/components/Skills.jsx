import React from "react";
import ProgressBar from "./ProgressBar";

export default function Skills() {
  const skills = [
    {
      url: "C++.png",
      percentage: 95,
    },
    {
      url: "python1.png",
      percentage: 80,
    },
    {
      url: "react1.png",
      percentage: 80,
    },
    {
      url: "tailwind.png",
      percentage: 80,
    },
  ];

  return (
    <div className=" h-screen t-0 bg-cover bg-center bg-[url('/02.jpg')]">
      <div className="h-[800px]  flex flex-col items-center justify-center">
        <div className="t-0 h-[100px] mb-6 font-bold text-[80px] text-white flex justify-center">
          Skills
        </div>
        <br />

        <div className=" w-1/2 text-white  p-[20px]  rounded-[20px] text-justify">
          <p>
            I am skilled in frontend development with expertise in React.js and
            Tailwind CSS, having built projects like a Swiggy clone UI. I have
            experience in machine learning using TensorFlow, Keras, and
            scikit-learn, with a focus on phishing website detection.
            Additionally, I am proficient in data structures and algorithms
            using C++ and have worked on competitive coding problems.
          
          </p>
        </div>

        <div className="flex flex-col w-[650px] h-[400px]  mt-5 space-y-4">
          {skills.map((skill, index) => (
            <ProgressBar
              {...skill}
              key={index}
              className="w-[150px] grow-1 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
