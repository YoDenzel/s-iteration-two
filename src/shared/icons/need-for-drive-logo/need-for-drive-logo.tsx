import { TIcons } from '../../types';

export const NeedForDriveLogo = ({ width = 45, height = 45 }: TIcons) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 22.25C0 9.962 9.962 0 22.25 0S44.5 9.962 44.5 22.25c0 2.814-.523 5.507-1.476 7.985a9.25 9.25 0 1 0-12.789 12.789A22.194 22.194 0 0 1 22.25 44.5C9.962 44.5 0 34.538 0 22.25Zm30.235 20.774a9.25 9.25 0 0 0 12.789-12.789 22.32 22.32 0 0 1-12.789 12.79Z"
      fill="#0EC261"
    />
  </svg>
);
