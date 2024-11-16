import { useState, useEffect } from 'react';

export const ActivityHistory = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  const handleDelete = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
    setActivities(updatedActivities);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-light">Historial de Actividades</h2>
      {activities.length === 0 ? (
        <p className="text-light">No hay actividades registradas.</p>
      ) : (
        <div className="table-responsive bg-dark p-3 rounded shadow">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del ejercicio</th>
                <th>Series</th>
                <th>Repeticiones</th>
                <th>Nivel de Fatiga</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{activity.name}</td>
                  <td>{activity.sets}</td>
                  <td>{activity.reps}</td>
                  <td>{activity.fatigue}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};