import React from "react";

function HotSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="current"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
    </svg>
  );
}

export default HotSVG;
