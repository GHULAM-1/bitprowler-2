import * as React from "react";

function BackArrowSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 30"
      fill="current"
      {...props}
    >
      <path
        d="M.586 13.586a2 2 0 000 2.828l12.728 12.728a2 2 0 102.828-2.828L4.828 15 16.142 3.686A2 2 0 1013.314.858L.586 13.586zM50 17a2 2 0 100-4v4zM2 17h48v-4H2v4z"
        fill="current"
      />
    </svg>
  );
}

export default BackArrowSVG;
