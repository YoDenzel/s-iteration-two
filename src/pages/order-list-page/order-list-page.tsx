import { useCookies } from 'react-cookie';

export function OrderListPage() {
  const [_, __, removeCookie] = useCookies(['access']);
  return (
    <div>
      Hello world
      <button
        onClick={() =>
          removeCookie('access', {
            path: '/',
          })
        }
      >
        Клик
      </button>
    </div>
  );
}
