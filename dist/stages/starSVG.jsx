import * as React from "react";

function StarSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="current"
      {...props}
    >
      <path
        d="M20 2.882l4.464 12.063.16.431.43.16L37.119 20l-12.063 4.464-.431.16-.16.43L20 37.119l-4.464-12.063-.16-.431-.43-.16L2.881 20l12.063-4.464.431-.16.16-.43L20 2.881z"
        stroke="current"
        strokeWidth={2}
      />
    </svg>
  );
}

export default StarSVG;
