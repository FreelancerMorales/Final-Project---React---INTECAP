import { Link } from 'react-router-dom';

export const InicioPublic = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-light mb-4">¡Bienvenido a FitnessApp!</h1>
      <p className="text-light">
        Gestiona tus rutinas de ejercicio, registra tus actividades físicas y analiza tu progreso.
      </p>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-light shadow">
            <div className="card-body">
              <h5 className="card-title">¿Nuevo en FitnessApp?</h5>
              <p className="card-text">
                Regístrate y empieza a llevar un control completo de tus actividades físicas.
              </p>
              <Link to="/registrarse" className="btn btn-primary w-100">
                Registrarse
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-light shadow">
            <div className="card-body">
              <h5 className="card-title">¿Ya tienes cuenta?</h5>
              <p className="card-text">
                Inicia sesión para acceder a todas tus actividades y estadísticas.
              </p>
              <Link to="/login" className="btn btn-success w-100">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};