import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const funcionBotonLlamada = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Todos los campos son obligatorios.');
      return;  // no puede haber campos vacíos
    }

    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres.');
      return; // clave mas 6 
    }

    alert('Login exitoso.');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Login</h2>
      <form onSubmit={funcionBotonLlamada}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2">Login</button>
      </form>
    </div>
  );
}

export default Login;

