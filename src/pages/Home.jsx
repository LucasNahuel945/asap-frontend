import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from '../components';

export const Home = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Layout>
      <div>
        <div className='d-flex w-50 align-items-center justify-content-start mb-3'>
          <i className="mx-1 fa-solid fa-user"></i>
          <b className="mx-1">Nombre:</b> {user.nombre}
        </div>
        <div className='d-flex w-50 align-items-center justify-content-start mb-3'>
          <i className="mx-1 fa-solid fa-id-card"></i>
          <b className="mx-1">Perfil:</b> {user.perfil.descripcion}
        </div>
        <div className='d-flex w-50 align-items-center justify-content-start mb-3'>
          <i className="mx-1 fa-solid fa-envelope"></i>
          <b className="mx-1">Correo:</b> {user.email}
        </div>
      </div>
    </Layout>
  );
};