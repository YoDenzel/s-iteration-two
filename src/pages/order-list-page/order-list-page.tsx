import { addDays } from 'date-fns';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export function OrderListPage() {
  const [cookie, __, removeCookie] = useCookies(['access']);
  const navigate = useNavigate();

  return (
    <div>
      Hello world
      <button
        onClick={() => {
          removeCookie('access', {
            path: '/',
            expires: addDays(new Date(), 1),
          });
          navigate('/s-iteration-two/admin');
        }}
      >
        Клик
      </button>
    </div>
  );
}
