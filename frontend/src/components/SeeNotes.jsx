import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SeeNotes = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState({
    title: '',
    description: '',
    content: '',
  });

  useEffect(() => {
    const getApiSpesific = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/catatan/${id}`);
        const data = response.data.data;
        setNotes(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getApiSpesific();
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>{notes && notes.title}</h1>
            <h3>{notes && notes.description}</h3>
            <hr />
            <h4>{notes && notes.content}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">
              <Button>Kembali</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SeeNotes;
