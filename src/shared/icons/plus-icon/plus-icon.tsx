import { TIcons } from '../../types';

export const PlusIcon = ({ height = 16, width = 16 }: TIcons) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#BECAD6" d="M7 0h2v16H7z" />
      <path fill="#BECAD6" d="M16 7v2H0V7z" />
    </svg>
  );
};
