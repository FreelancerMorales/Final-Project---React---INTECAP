import { Link } from 'react-router-dom';

export const InicioPrivate = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-light mb-4">¡Bienvenido a FitnessApp!</h1>
      <p className="text-light">
        Tu aplicación para gestionar y analizar tus actividades físicas.
      </p>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-light border-white">
            <div className="card-body">
              <h5 className="card-title">Registrar Actividades</h5>
              <p className="card-text">
                Crea un registro de tus ejercicios, incluyendo series, repeticiones y nivel de fatiga.
              </p>
              <Link to="/activity-form" className="btn btn-primary w-100">
                Comenzar
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-light border-white">
            <div className="card-body">
              <h5 className="card-title">Historial de Actividades</h5>
              <p className="card-text">
                Consulta y administra todas las actividades que has registrado hasta ahora.
              </p>
              <Link to="/activity-history" className="btn btn-success w-100">
                Ver Historial
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-light border-white">
            <div className="card-body">
              <h5 className="card-title">Estadísticas</h5>
              <p className="card-text">
                Analiza tu desempeño físico mediante gráficos interactivos.
              </p>
              <Link to="/activity-stats" className="btn btn-info w-100">
                Ver Estadísticas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
