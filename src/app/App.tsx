import { createTheme, ThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';
import { Routes, Route, Navigate } from 'react-router';
import { NavigationMenu } from '../components';
import { AuthPage, OrderListPage } from '../pages';
import { useAppSelector } from '../shared/custom-hooks';

export function App() {
  const isAuthenticated = useAppSelector(
    state => state.authSlice.isAuthenticated,
  );
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
      {!isAuthenticated ? (
        <Routes>
          <Route path="/s-iteration-two" element={<AuthPage />} />
          <Route path="/s-iteration-two/admin/*" element={<AuthPage />} />
        </Routes>
      ) : (
        <div className="flex">
          <NavigationMenu />
          <Routes>
            <Route
              path="/s-iteration-two/admin/order-list"
              element={<OrderListPage />}
            />
            <Route
              path="*"
              element={
                <Navigate to="/s-iteration-two/admin/order-list" replace />
              }
            />
          </Routes>
        </div>
      )}
    </ThemeProvider>
  );
}
