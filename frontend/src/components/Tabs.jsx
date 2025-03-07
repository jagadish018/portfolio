import React, { useState } from "react";
import Cards from "./Cards"; // Import your Cards component

export default function Tabs() {
  const cards = [
    {
      id: 1,
      front: "• Drug response prediction",
      back: "• Develop a reliable predictive model to identify individuals at high risk of developing colon cancer using clinical records and patient history to enable early detection and personalized treatment planning.",
    },
    {
      id: 2,
      front: "• Swiggy Clone UI Development",
      back: "Developed a fully responsive front-end user interface for a Swiggy clone application. Utilized React for component-based architecture, ensuring reusable and modular code. Implemented key features such as restaurant listings, food item display, and a cart system.",
    },
    {
      id: 3,
      front: "• Grocery Store Management System",
      back: "• Created a system for organizing items, billing, and managing quantities with decision-making trees and linked lists.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1); // State to track which tab is active

  return (
    <>
      <div className="mt-auto p-5 container flex flex-row  justify-center items-center">
        {/* Tab buttons */}
        <div className="bg-black rounded-full w-auto">
          <button
            className={`text-white w-[200px] h-[40px] border border-black rounded-s-[30px] hover:bg-gray-300 transition-all duration-800 hover:bg-gray-800 ${
              activeTab === 1 ? "bg-gray-500" : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            Tab 1
          </button>
          <button
            className={`text-white w-[200px] h-[40px] border border-black hover:bg-gray-300 transition-all duration-800 hover:bg-gray-800 ${
              activeTab === 2 ? "bg-gray-500" : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            Tab 2
          </button>
          <button
            className={`text-white w-[200px] h-[40px] border border-black rounded-e-full hover:bg-gray-500 transition-all duration-800 hover:bg-gray-800 ${
              activeTab === 3 ? "bg-gray-500" : ""
            }`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button>
        </div>
      </div>

      {/* Render the Cards component based on the active tab */}
      <div className="mt-5 p-5 container flex justify-center items-center">
        <Cards
          front={cards[activeTab - 1].front}
          back={cards[activeTab - 1].back}
        />
      </div>
    </>
  );
}
