import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');

  const funcionDelBoton = (e) => {
    e.preventDefault();

    setSuccess('');  // Reiniciar mensaje de éxito

    // no puede haber campos vacios
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // clave mayor a 6
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // clave y confirmacion iguales
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // registro correcto emitira alerta ...
    setSuccess('Registro exitoso.');
    alert('Registro exitoso.');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de registro</h2>
      <form onSubmit={funcionDelBoton}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
