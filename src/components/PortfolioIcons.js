import React from "react";
function Icon({children, ...props}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}
export const ArrowUpRight = () => (
  <Icon>
    <path d="M5 19 19 5M5 5h14v14" />
  </Icon>
);
export const ArrowDown = () => (
  <Icon>
    <path d="M12 4v16m-6-6 6 6 6-6" />
  </Icon>
);
export const ArrowRight = () => (
  <Icon>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </Icon>
);
export const Plus = () => (
  <Icon>
    <path d="M5 12h14M12 5v14" />
  </Icon>
);
export const Check = () => (
  <Icon>
    <path d="m5 12 4 4L19 6" />
  </Icon>
);
export const Copy = () => (
  <Icon>
    <rect x="8" y="8" width="12" height="12" rx="1" />
    <path d="M16 8V4H4v12h4" />
  </Icon>
);
