import * as React from "react";

function GlobeSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="current"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20" />
    </svg>
  );
}

export default GlobeSVG;
