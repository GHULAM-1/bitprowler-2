import React from "react";

function LinkSVG(props) {
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
      <path d="M9 17H7A5 5 0 017 7h2M15 7h2a5 5 0 110 10h-2"></path>
      <path d="M8 12L16 12"></path>
    </svg>
  );
}

export default LinkSVG;
