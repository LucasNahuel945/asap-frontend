import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from './routes';
import { useLogin } from '../hooks';

const Authenticated = () => (
  <Routes>
    <Route {...routes.cuenta} />
    <Route {...routes.home} />
    <Route {...routes.logout} />
    <Route {...routes.modulo1} />
    <Route {...routes.modulo2} />
    <Route {...routes.usuario} />
    <Route {...routes.utils} />
  </Routes>
);

const Unauthenticated = () => (
  <Routes>
    <Route {...routes.login} />
  </Routes>
);

export const Router = () => {
  const { user } = useSelector(state => state.auth);
  const { tryLoginFromLocalStorage } = useLogin();

  // intentar login si hay datos guardados en local storage
  useEffect(() => { tryLoginFromLocalStorage() }, []);

  return (
    <BrowserRouter>
      {
        !!user // si hay usuario autenticado
          ? <Authenticated /> // rutas para usuario autenticado
          : <Unauthenticated /> // rutas para usuario no autenticado
      }
    </BrowserRouter>
  );
};