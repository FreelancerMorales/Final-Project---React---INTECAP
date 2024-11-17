import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BtnInicio } from '../components/btnInicio';
import { Header } from '../components/Header';

const Layout = () => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Header />

      <main className="flex-grow-1">
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>

      <footer className="bg-dark text-center py-3 mt-auto border-top">
        <Container>
          <p className="mb-0">© 2024 FitnessApp - Todos los derechos reservados</p>
        </Container>
      </footer>
      <BtnInicio></BtnInicio>
    </div>
  );
};

export default Layout;
