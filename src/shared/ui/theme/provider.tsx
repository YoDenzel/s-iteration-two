import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './default';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#F5F6F8',
      },
    },
  },
  ruRU,
);

type TAppThemeProvider = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: TAppThemeProvider) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
};
