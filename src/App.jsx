import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPelicula from "./components/FormularioPelicula";
import { useEffect, useState } from "react";

function App() {
  const peliculaLocalStorage = JSON.parse(localStorage.getItem("peliculas"));
  const [peliculasApp, setPeliculas] = useState(peliculaLocalStorage);
  useEffect = () => {};
  const crearPelicula = () => {};
  return (
    <>
      <div className="text-center text-danger">
        <h1>Alta de peliculas</h1>
      </div>
      <FormularioPelicula></FormularioPelicula>
    </>
  );
}

export default App;
