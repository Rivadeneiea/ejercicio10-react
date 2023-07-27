import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArticuloPelicula = ({ pelicula, borrarPelicula }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{cita.nombre}</Card.Title>
        <Card.Text>
          {cita.descripcion}
          {cita.genero}
        </Card.Text>
        <Button variant="danger" onClick={() => borrarPelicula(pelicula.id)}>
          borrar Pelicula
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticuloPelicula;
