import React from "react";

export default function SproutIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="sprout-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 10C12 10 6 9 5 4C10 4 12 6 12 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C12 10 18 9 19 4C14 4 12 6 12 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
