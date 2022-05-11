import { useCookies } from 'react-cookie';
import { Routes, Route, Navigate } from 'react-router';
import { NavigationMenu } from '../components';
import { AuthPage, OrderListPage } from '../pages';

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
    <div className="flex">
      <NavigationMenu />
      <Routes>
        <Route
          path="/s-iteration-two/admin/order-list"
          element={<OrderListPage />}
        />
        <Route
          path="*"
          element={<Navigate to="/s-iteration-two/admin/order-list" replace />}
        />
      </Routes>
    </div>
  );
}
