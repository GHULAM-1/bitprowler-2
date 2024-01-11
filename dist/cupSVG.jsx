import React from "react";

function CupSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="current"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-coffee"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4z"></path>
      <path d="M6 2L6 4"></path>
      <path d="M10 2L10 4"></path>
      <path d="M14 2L14 4"></path>
    </svg>
  );
}

export default CupSVG;
