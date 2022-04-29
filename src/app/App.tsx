import { Routes, Route, Navigate } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';
import { AuthPage, AdminPanel } from '../pages';
import { useAppSelector } from '../shared/custom-hooks';
import { useCookies } from 'react-cookie';

export function App() {
  const isAuthenticated = useAppSelector(
    state => state.authSlice.isAuthenticated,
  );
  const [cookie] = useCookies(['auth']);
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
  // приходится использовать руты так, из-за gh pages, он отчаянно не хочет видеть корректную homepage вида
  // s-itertaion-two/admin/*
  return (
    <ThemeProvider theme={theme}>
      {!cookie.auth ? (
        <Routes>
          <Route path="/s-iteration-two" element={<AuthPage />} />
          <Route path="/s-iteration-two/admin/*" element={<AuthPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/s-iteration-two/admin/order-list"
            element={<AdminPanel />}
          />
          <Route
            path="*"
            element={
              <Navigate to="/s-iteration-two/admin/order-list" replace />
            }
          />
        </Routes>
      )}
    </ThemeProvider>
  );
}
