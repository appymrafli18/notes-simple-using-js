import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardComp = ({ notex }) => {
  const deleteNotes = async (id) => {
    const result = window.confirm('Apakah Kamu Yakin Ingin Menghapus?');
    if (!result) return;

    try {
      await axios.delete(`http://localhost:5000/catatan/${id}`);
      alert('Notes Berhasil Di Hapus!');
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="d-flex flex-wrap gap-4 p-4">
      {notex.data?.map((item, index) => (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-truncate">{item.description}</Card.Text>
            <Link to={`/notes/${item.uuid}`}>
              <Button variant="primary" type="submit">
                Lihat
              </Button>
            </Link>
            <Link to={`/notes/edit/${item.uuid}`}>
              <Button variant="success" type="submit" className="ms-2">
                Edit
              </Button>
            </Link>
            <Button variant="danger" className="ms-2" onClick={() => deleteNotes(item.uuid)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardComp;
