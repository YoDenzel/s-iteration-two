import { TIcons } from "../../types";

export const CarCardPen = ({color, height = 15, width = 15} : TIcons) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.321 4.109a.608.608 0 0 1 0 .861l-1.118 1.118-2.291-2.291 1.118-1.118a.609.609 0 0 1 .862 0l1.43 1.43ZM2.5 13.5v-2.291L9.258 4.45l2.291 2.291L4.791 13.5H2.5Z"
      fill={color || "#007BFF"}
    />
  </svg>
);

