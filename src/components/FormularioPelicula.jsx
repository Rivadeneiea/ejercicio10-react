import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioPelicula = () => {
  conts[(pelicula, setPelicula)] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const valorPelicula = (e) => {
    setPelicula({ ...pelicula, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    pelicula.id = new Date().getTime();
  };
  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={pelicula.nombre}
          placeholder="Ingrese un nombre"
          onChange={valorPelicula}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          name="descripcion"
          value={pelicula.descripcion}
          placeholder="Ingrese una descripcion"
          onChange={valorPelicula}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Genero</Form.Label>
        <Form.Control
          type="text"
          name="genero"
          value={pelicula.genero}
          placeholder="Comedia, drama o infantil"
          onChange={valorPelicula}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormularioPelicula;
