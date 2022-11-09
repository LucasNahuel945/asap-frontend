import { useDispatch } from "react-redux";
import { authenticate } from '../services';
import { login } from '../store';
import { useLogout } from "./useLogout";

export const useLogin = () => {
  const dispatch = useDispatch();
  const { logoutListener } = useLogout();

  const tryLoginFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!!user) {
      dispatch(login(user));
      logoutListener();
    };
  };

  const tryAuthenticate = async (username, password) => {
    const response = await authenticate(username, password);
    if (response) {
      localStorage.setItem('user', JSON.stringify(response));
      dispatch(login(response));
      logoutListener();
      window.location.href = '/inicio';
    } 

    return !!response;
  };

  return {
    tryLoginFromLocalStorage,
    tryAuthenticate
  }
};
