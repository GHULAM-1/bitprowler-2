import * as React from "react";

function CircleSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 42 42"
      fill="current"
      {...props}
    >
      <circle cx={21} cy={21} r={20} stroke="#F3current" strokeWidth={2} />
    </svg>
  );
}

export default CircleSVG;
