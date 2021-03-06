import { TIcons } from "../../types";

export const CarList = ({color, height = 16, width = 17}: TIcons) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 3.5v1.357h5.333V3.5H2.5Zm5.333 4.071H2.5V6.214h5.333v1.357ZM2.5 10.286h5.333V8.929H2.5v1.357ZM2.5 13h5.333v-1.357H2.5V13Zm12-9.5H9.167V13H14.5V3.5Z"
      fill={color}
    />
  </svg>
);
