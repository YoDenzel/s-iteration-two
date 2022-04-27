import { createTheme, ThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';
import { Routes, Route } from 'react-router';
import { AuthPage } from '../pages';

export function App() {
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
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </ThemeProvider>
  );
}
