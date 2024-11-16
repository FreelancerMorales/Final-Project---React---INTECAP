import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      setMessage('Inicio de sesión exitoso.');
      setEmail('');
      setPassword('');
      navigate('/');
      window.location.reload();
    } else {
      setMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center border-bottom pb-2">Iniciar Sesión</h2>
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
      <button className="btn btn-primary" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
}