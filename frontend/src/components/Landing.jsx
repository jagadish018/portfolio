import React, { useState, useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const words = ["Frontend Developer"];

const Landing = () => {
  const [currentWord, setCurrentWord] = useState(0); // Index of the current word
  const [displayText, setDisplayText] = useState(""); // Text to display character by character
  const [charIndex, setCharIndex] = useState(0); // Index of the current character

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < words[currentWord].length) {
        setDisplayText((prev) => prev + words[currentWord][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0); // Reset character index for the new word
          setDisplayText(""); // Clear the displayed text
          setCurrentWord((prevWord) => (prevWord + 1) % words.length); // Move to the next word
        }, 1000); // Delay before resetting the word
      }
    }, 100); // Typing speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [charIndex, currentWord]);

  return (
    <>
      <div className="shadow-black shadow-5xl h-screen  bg-cover bg-center bg-[url('/background.jpg')]">
        <div className="p-5 flex flex-col items-center justify-center w-[800px] h-[500px]">
          <div className="mr-60 w-[200px] h-[40px] text-l font-bold text-[white] border border-white text-center flex items-center justify-center">
            Welcome to my portfolio
          </div>
          <h1 className="mt-10 text-5xl h-[100px] font-bold text-white">
            <span>Hi! I'm Jagadish&nbsp;C K</span>
            <br />
            <span className="animate-fadeInOut">{displayText}</span>
          </h1>
          <br />{" "}
          <p className="text-white ml-[160px]">
          Jagadish C K, an engineering student at Siddaganga Institute of Technology, passionate about coding and proficient in C++, Python, and data structures & algorithms. Eager to contribute innovative solutions and collaborate in software development.
          </p>
        </div>
        <div className="mt-[100px] font-bold text-white text-xl ml-44">
          <span>Let's Connect </span>
          <NavLink to="/get-in-touch">
            <FaCircleArrowRight className="inline bg-black rounded-xl" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Landing;
