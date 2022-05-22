import { TIcons } from "../../types";

export const NotificationBell = ({width = 18, height = 21} : TIcons) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.375 9.05v5.323l2.125 2.129v1.065H.5v-1.065l2.125-2.13V9.05c0-3.279 1.732-6.004 4.781-6.728v-.724a1.593 1.593 0 1 1 3.188 0v.724c3.039.724 4.781 3.46 4.781 6.728Zm-4.108 9.65a2.266 2.266 0 1 1-4.533 0h4.533Z"
      fill="#818EA3"
    />
  </svg>
);
