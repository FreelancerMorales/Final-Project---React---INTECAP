import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column text-center justify-content-center">
      <h1 className=" text-danger">404</h1>
      <p>Página no encontrada</p>
      <NavLink to="/" className="btn btn-primary">
        Volver al Inicio
      </NavLink>
    </div>
  );
}

export default NotFoundPage;
