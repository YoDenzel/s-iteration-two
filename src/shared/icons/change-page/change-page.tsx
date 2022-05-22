import { TIcons } from "../../types";

export const ChangePage = ({width = 7, height = 6, color} : TIcons) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M3.99 2.21 6.355.372V1.69L4.773 2.906l1.582 1.216V5.44L3.99 3.602V2.21Zm-3.07 0L3.28.372V1.69L1.704 2.906l1.574 1.216V5.44L.921 3.602V2.21Z"
      fill={color ?? "#007BFF"}
    />
  </svg>
)

