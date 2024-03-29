import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddNotes = () => {
  const [dataSend, setDataSend] = useState({
    judul: '',
    description: '',
    content: '',
  });
  const navigate = useNavigate();

  const onCreateNotes = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/catatan/',
        {
          title: dataSend.judul,
          description: dataSend.description,
          content: dataSend.content,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form onSubmit={onCreateNotes} className="w-50 min-vh-100 justify-content-center mx-auto d-flex flex-column">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Judul Catatan" onChange={(e) => setDataSend({ ...dataSend, judul: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Deskripsi Catatan" onChange={(e) => setDataSend({ ...dataSend, description: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Isi Catatan</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Isi Catatan" onChange={(e) => setDataSend({ ...dataSend, content: e.target.value })} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddNotes;
