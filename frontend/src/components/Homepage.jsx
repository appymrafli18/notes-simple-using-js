import { Button, Col, Container, Row } from 'react-bootstrap';
import CardComp from './CardComp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const getApi = async () => {
    try {
      const response = await axios.get('http://localhost:5000/catatan/');
      setNotes(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Link to="/notes/add">
              <Button className="m-4">Tambahkan Notes</Button>
            </Link>
            {error && <h4 className="text-center fs-2 fw-semibold">{error}</h4>}
          </Col>
        </Row>
        <Row>
          <Col>{!error && <CardComp notex={notes} />}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
