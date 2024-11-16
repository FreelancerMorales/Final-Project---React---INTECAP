import { useEffect, useState } from 'react';
import { InicioPrivate } from '../components/InicioPrivate';
import { InicioPublic } from '../components/InicioPublic';

const Inicio = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div>
      {isAuthenticated ? <InicioPrivate /> : <InicioPublic />}
    </div>
  );
};

export default Inicio;