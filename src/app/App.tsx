import { createTheme, ThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';
import { Routes, Route, Navigate } from 'react-router';
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
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/s-iteration-two" element={<AuthPage />} />
            <Route path="/s-iteration-two/admin/*" element={<AuthPage />} />
          </>
        ) : (
          <>
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
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
}
