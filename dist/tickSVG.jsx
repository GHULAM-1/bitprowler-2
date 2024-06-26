import * as React from "react";

function TickSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="current"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default TickSVG;
