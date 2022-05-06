import { TIcons } from '../../types';

export const CheckMark = ({ width = 8, height = 6, color }: TIcons) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 4.738 7.164.324 7.75.91l-5 5L.426 3.586 1.012 3 2.75 4.738Z"
      fill={color || '#121212'}
    />
  </svg>
);
