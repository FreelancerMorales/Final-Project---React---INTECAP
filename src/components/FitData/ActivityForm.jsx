import { useState } from 'react';

const ActivityForm = () => {
  const [activity, setActivity] = useState({
    name: '',
    sets: '',
    reps: '',
    fatigue: 1,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activity.name || !activity.sets || !activity.reps) {
      setMessage('Por favor completa todos los campos.');
      return;
    }

    const existingActivities = JSON.parse(localStorage.getItem('activities')) || [];
    const updatedActivities = [...existingActivities, activity];
    localStorage.setItem('activities', JSON.stringify(updatedActivities));

    setActivity({ name: '', sets: '', reps: '', fatigue: 1 });
    setMessage('Actividad registrada exitosamente.');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-light">Registrar Actividad Física</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} className="bg-dark text-light p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del ejercicio</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={activity.name}
            onChange={handleChange}
            placeholder="Ej. Sentadillas"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sets" className="form-label">Número de series</label>
          <input
            type="number"
            className="form-control"
            id="sets"
            name="sets"
            value={activity.sets}
            onChange={handleChange}
            placeholder="Ej. 3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reps" className="form-label">Número de repeticiones</label>
          <input
            type="number"
            className="form-control"
            id="reps"
            name="reps"
            value={activity.reps}
            onChange={handleChange}
            placeholder="Ej. 12"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fatigue" className="form-label">Nivel de fatiga (1-10)</label>
          <input
            type="range"
            className="form-range"
            id="fatigue"
            name="fatigue"
            min="1"
            max="10"
            value={activity.fatigue}
            onChange={handleChange}
          />
          <div className="text-light">Nivel seleccionado: {activity.fatigue}</div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrar Actividad
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;