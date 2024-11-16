import { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Registrar los componentes de gráficos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export const ActivityStats = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  // Datos para el gráfico de barras (Series y Repeticiones)
  const barData = {
    labels: activities.map((activity) => activity.name),
    datasets: [
      {
        label: 'Series',
        data: activities.map((activity) => parseInt(activity.sets, 10)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Repeticiones',
        data: activities.map((activity) => parseInt(activity.reps, 10)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  // Datos para el gráfico de pastel (Niveles de fatiga)
  const fatigueDistribution = activities.reduce((acc, activity) => {
    acc[activity.fatigue] = (acc[activity.fatigue] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(fatigueDistribution),
    datasets: [
      {
        label: 'Distribución de Fatiga',
        data: Object.values(fatigueDistribution),
        backgroundColor: [
          '#4caf50',
          '#ffeb3b',
          '#f44336',
          '#2196f3',
          '#9c27b0',
          '#ff9800',
          '#00bcd4',
          '#e91e63',
          '#8bc34a',
          '#607d8b',
        ],
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-light">Estadísticas de Actividades</h2>
      {activities.length === 0 ? (
        <p className="text-light">No hay datos suficientes para generar estadísticas.</p>
      ) : (
        <div className="row">
          {/* Gráfico de Barras */}
          <div className="col-md-6 mb-4">
            <div className="bg-dark p-3 rounded shadow">
              <h4 className="text-light">Series y Repeticiones</h4>
              <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
          </div>

          {/* Gráfico de Pastel */}
          <div className="col-md-6 mb-4">
            <div className="bg-dark p-3 rounded shadow">
              <h4 className="text-light">Distribución de Fatiga</h4>
              <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};