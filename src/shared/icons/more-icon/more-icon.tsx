import { TIcons } from '../../types';

export const MoreIcon = ({ width = 3, height = 8 }: TIcons) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.327 2c.52 0 .946-.45.946-1s-.426-1-.946-1S.38.45.38 1s.425 1 .946 1Zm0 1C.807 3 .38 3.45.38 4s.425 1 .946 1c.52 0 .946-.45.946-1s-.426-1-.946-1ZM.38 7c0-.55.425-1 .946-1 .52 0 .946.45.946 1s-.426 1-.946 1S.38 7.55.38 7Z"
      fill="#818EA3"
    />
  </svg>
);
