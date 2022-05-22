import { TIcons } from '../../types';

export const Orders = ({ color, height = 12, width = 13 }: TIcons) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 1h-4c-.55 0-.995.45-.995 1L2.5 10c0 .55.445 1 .995 1H9.5c.55 0 1-.45 1-1V4l-3-3Zm1 7H7v1.5H6V8H4.5V7H6V5.5h1V7h1.5v1ZM7 1.75V4.5h2.75L7 1.75Z"
      fill={color}
    />
  </svg>
);
