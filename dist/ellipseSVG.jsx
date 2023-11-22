import * as React from "react";

function EllipseSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185 240"
      fill="current"
      {...props}
    >
      <circle cx={65} cy={120} r={120} fill="url(#paint0_linear_680_1667)" />
      <defs>
        <linearGradient
          id="paint0_linear_680_1667"
          x1={-48.4622}
          y1={159.068}
          x2={178.462}
          y2={80.9318}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6121" />
          <stop offset={0.198958} stopColor="#CC2B14" />
          <stop offset={0.902083} stopColor="#151515" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default EllipseSVG;
