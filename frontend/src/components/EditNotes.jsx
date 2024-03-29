import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getNotesSpesific = async () => {
      try {
        const findNotes = await axios.get(`http://localhost:5000/catatan/${id}`);
        const response = findNotes.data.data;
        setTitle(response.title);
        setDescription(response.description);
        setContent(response.content);
      } catch (error) {
        console.log(error.message);
      }
    };

    getNotesSpesific();
  }, [id]);

  const onUpdateNotes = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/catatan/${id}`, {
        title,
        description,
        content,
      });

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form onSubmit={onUpdateNotes} className="w-50 min-vh-100 justify-content-center mx-auto d-flex flex-column">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Judul</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Judul Catatan" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Deskripsi Catatan" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Isi Catatan</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Isi Catatan" value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditNotes;
