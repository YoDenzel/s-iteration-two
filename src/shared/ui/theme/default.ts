import { THEME_GRID_STEP } from './constants';

export const defaultTheme = {
  name: 'default',
  colors: {
    primaryBackground: '#F5F6F8',
    white: '#ffffff',
    black: '#121212',
    titleFont: '#3D5170',
    primaryFont: '#495057',
    secondaryFont: '#5A6169',
    lightGray: '#868E96',
    blue: '#007BFF',
    red: '#C4183C',
    inputBorder: '#BECAD6',
    tableTextFont: '#818EA3',
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
  breakPoints: {
    mobile: '767px',
    tablet: '1023px',
    desktopMin: '1439px',
  },
};
