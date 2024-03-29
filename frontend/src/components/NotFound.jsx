import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
      <div className="mw-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold text-center">Not Found</h1>
        <h1 className="fw-bold text-center">404</h1>
      </div>
    </Container>
  );
};

export default NotFound;
