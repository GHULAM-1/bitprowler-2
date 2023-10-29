import * as React from "react";

function HexagonSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 40"
      fill="current"
      {...props}
    >
      <path
        d="M1.68 10.577L18 1.155l16.32 9.422v18.846L18 38.845 1.68 29.423V10.577z"
        stroke="current"
        strokeWidth={2}
      />
    </svg>
  );
}

export default HexagonSVG;
