import { useCookies } from 'react-cookie';
import { Routes, Route, Navigate } from 'react-router';
import { AuthPage, AdminPanel } from '../pages';

export function App() {
  const [cookie] = useCookies(['access']);
  // приходится использовать руты так, из-за gh pages, он отчаянно не хочет видеть корректную homepage вида
  // s-itertaion-two/admin/*
  return !cookie.access ? (
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
        element={<Navigate to="/s-iteration-two/admin/order-list" replace />}
      />
    </Routes>
  );
}
