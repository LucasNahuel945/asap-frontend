import React, { useState } from 'react';
import { Field } from '../components';
import { useLogin } from '../hooks';

export const Login = () => {
  const { tryAuthenticate } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (e) => { setUsername(e.target.value) };
  const handlePassword = (e) => { setPassword(e.target.value) };

  const showWrongPasswordAlert = () => {
    document
      .getElementById('wrong')
      .classList.remove('d-none');
  };

  const onSubmit = async () => {
    // si no puede autenticarse mostrar alerta de contrasenia incorrecta
    const result = await tryAuthenticate(username, password)
    if (!result) {
      showWrongPasswordAlert();
    }
  };

  return (
    <div className='container-fluid vh-100 d-flex align-items-center justify-content-center'>
      <div className="form-group row border p-2" style={{ width: '400px' }}>
        <div className="d-flex text-center mb-1 col-12">
          <label><b>Ingreso al sistema</b></label>
        </div>

        <Field
          icon='fa-solid fa-user'
          onChange={handleUser}
          placeholder="Usuario"
          type='text'
          value={username}
        />

        <Field
          icon='fa-solid fa-key'
          onChange={handlePassword}
          placeholder="Contraseña"
          type='password'
          value={password}
        />

        <div id='wrong' className="alert alert-danger col-12 align-items-center d-none" role="alert">
          <i className="fa-solid fa-circle-info col-auto"></i>
          <span className='col-auto'>Usuario o contraseña incorrectos</span>
        </div>

        <div className="d-flex align-items-center mb-1 col-12 justify-content-end">
          <button
            type='submit'
            className="btn btn-primary"
            onClick={onSubmit}
          >
            Iniciar Sesion
          </button>
        </div>
      </div>
    </div>
  );
};
