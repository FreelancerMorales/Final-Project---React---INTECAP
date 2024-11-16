import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const BtnInicio = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <button 
      className="btn btn-light shadow-sm position-fixed bottom-0 end-0 m-3 rounded-circle" 
      style={{ zIndex: 1050, width: '60px', height: '60px' }}
      onClick={handleGoHome}
      aria-label="Volver al inicio"
    >
      <i className="bi bi-house-door-fill fs-4"></i>
    </button>
  );
};