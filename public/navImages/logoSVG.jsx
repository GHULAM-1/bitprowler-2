import * as React from "react";

function LogoSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     
      viewBox="0 0 36 32"
      fill="current"
      {...props}
    >
      <path
        d="M6.363 11.407c.77-1.14 1.823-2.065 3.162-2.777 1.367-.712 2.92-1.068 4.657-1.068 2.022 0 3.845.499 5.468 1.495 1.652.997 2.948 2.421 3.888 4.273.969 1.823 1.453 3.945 1.453 6.366 0 2.42-.484 4.571-1.453 6.45-.94 1.852-2.236 3.29-3.888 4.316C18.027 31.487 16.204 32 14.182 32c-1.766 0-3.318-.342-4.657-1.025-1.31-.712-2.364-1.624-3.162-2.735v3.376H.383V0h5.98v11.407zm12.518 8.289c0-1.425-.299-2.65-.897-3.675-.57-1.054-1.339-1.851-2.307-2.392a6.058 6.058 0 00-3.076-.812 5.972 5.972 0 00-3.076.855c-.94.54-1.709 1.338-2.307 2.392-.57 1.054-.855 2.293-.855 3.717s.285 2.663.855 3.717c.598 1.054 1.367 1.866 2.307 2.435a6.211 6.211 0 003.076.812c1.11 0 2.136-.285 3.076-.855.968-.57 1.738-1.38 2.307-2.435.598-1.054.897-2.307.897-3.76zM31.986 31.915c-1.082 0-1.98-.328-2.691-.983-.684-.684-1.026-1.524-1.026-2.52 0-.998.342-1.824 1.026-2.479.712-.683 1.609-1.025 2.691-1.025 1.054 0 1.923.342 2.606 1.025.684.655 1.026 1.481 1.026 2.478 0 .997-.342 1.837-1.026 2.52-.683.656-1.552.984-2.606.984z"
        fill="current"
      />
    </svg>
  );
}

export default LogoSVG;
