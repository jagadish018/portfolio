import React from "react";

export default function ProgressBar(props) {
  const getColor = (percentage) => {
    if (percentage < 40) {
      return "#ff0000";
    } else if (percentage < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };

  return (
    <div className="container mt-10 flex items-center justify-between w-[450px] ml-24  p-2">
      <img
        src={"/" + props.url}
        alt=""
        className="w-[50px] h-[55px] rounded-[18px]"
      />
      <div className="progressbar w-[300px] h-[40px] rounded-[10px] bg-slate-400">
        <div
          className="progressbar-fill h-[100%] rounded-[10px] flex justify-center items-center text-white text-sm font-bold"
          style={{
            width: `${props.percentage}%`,
            background: getColor(props.percentage),
          }}
        >
          {props.percentage}%
        </div>
      </div>
    </div>
  );
}
