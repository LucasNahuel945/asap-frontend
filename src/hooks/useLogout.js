import { useDispatch } from 'react-redux';
import { logout } from '../store';

export const useLogout = () => {
  const dispatch = useDispatch();

  const logoutListener = () => {
    if (window.location.pathname === '/salir') {
      localStorage.removeItem('user');
      dispatch(logout());
      window.location.href = '/login';
    }
  }

  return { logoutListener }
};
