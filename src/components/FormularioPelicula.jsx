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

  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingrese una descripcion" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Genero</Form.Label>
        <Form.Control type="text" placeholder="Comedia, drama o infantil" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormularioPelicula;
