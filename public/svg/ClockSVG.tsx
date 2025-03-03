import { memo } from "react";

const ClockSVG = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.58594" cy="5.82434" r="4.9375" stroke="#9F7CF7" />
      <line
        x1="5.46094"
        y1="3.82056"
        x2="5.46094"
        y2="6.36755"
        stroke="#9F7CF7"
        strokeLinecap="round"
      />
      <line
        x1="5.47177"
        y1="6.3772"
        x2="7.71867"
        y2="6.97943"
        stroke="#9F7CF7"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default memo(ClockSVG);
