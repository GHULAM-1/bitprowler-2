import * as React from "react";

function DropdownArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="current"
      {...props}
    >
      <path
        d="M24 30.75l-12-12 2.8-2.8 9.2 9.2 9.2-9.2 2.8 2.8-12 12z"
        fill="current"
      />
    </svg>
  );
}

export default DropdownArrow;
