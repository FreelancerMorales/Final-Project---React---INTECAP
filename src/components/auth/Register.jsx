import { useState } from "react";

export const RegisterUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      setMessage('Por favor completa todos los campos.');
      return;
    }

    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center border-bottom pb-2">Registrarse</h2>
      {message && <div className="alert alert-dark">{message}</div>}
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Registrarse
      </button>
    </div>
  );

}