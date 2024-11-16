import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Layout from '../pages/Layout';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ActivityFormPage from '../pages/ActivityFormPage';
import ActivityHistoryPage from '../pages/ActivityHistoryPage';
import ActivityStatsPage from '../pages/ActivityStatsPage';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas anidadas dentro de Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} /> {/* Ruta por defecto */}
          <Route path="inicio" element={<Inicio />} />
          <Route path="registrarse" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Inicio />} />

          <Route path='activity-form' element={<ActivityFormPage />} />
          <Route path='activity-history' element={<ActivityHistoryPage />} />
          <Route path='activity-stats' element={<ActivityStatsPage />} />

        </Route>

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
