import { Routes, Route } from 'react-router';
import { AuthPage } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="s-iteration-two/auth" element={<AuthPage />} />
    </Routes>
  );
}
