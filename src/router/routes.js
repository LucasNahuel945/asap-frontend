import React from 'react';
import {
  Home,
  Login,
  Utils,
  Cuenta,
  Usuarios,
  Modulo,
} from '../pages';

export const paths = {
  login: '/login',
  home: '/inicio',
  utils: '/utiles',
  logout: '/salir',
  modulo1: '/modulo/1',
  modulo2: '/modulo/2',
  cuenta: '/cuenta',
  usuarios: '/usuarios'
};

export const routes = {
  login: { path: paths.login, element: <Login /> },
  home: { path: paths.home, element: <Home /> },
  logout: { path: paths.logout, element: <Home /> },
  utils: { path: paths.utils, element: <Utils /> },
  cuenta: { path: paths.cuenta, element: <Cuenta /> },
  modulo1: { path: paths.modulo1, element: <Modulo number={1} /> },
  modulo2: { path: paths.modulo2, element: <Modulo number={2} /> },
  usuario: { path: paths.usuarios, element: <Usuarios /> },
};
