import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPelicula from "./components/FormularioPelicula";
import { useEffect, useState } from "react";
import ArticuloPelicula from "./components/ArticuloPelicula";

function App() {
  const peliculaLocalStorage = JSON.parse(localStorage.getItem("peliculas"));
  const [peliculasApp, setPeliculasApp] = useState(peliculaLocalStorage);
  useEffect =
    (() => {
      localStorage.setItem("peliculas", JSON.stringify(peliculasApp));
    },
    [peliculasApp]);
  const crearPelicula = (pelicula) => {
    setPeliculasApp([...peliculasApp, pelicula]);
  };
  const borrarPelicula = (id) => {
    const crearNuevaPelicula = peliculasApp.filter(
      (pelicula) => pelicula.id !== id
    );
    if (peliculasApp.id !== id) {
      setCitasApp(crearNuevaPelicula);
    }
  };
  const msj = "no hay oeliculas";
  return (
    <>
      <div className="text-center text-danger">
        <h1>Alta de peliculas</h1>
      </div>
      <FormularioPelicula crearPelicula={crearPelicula}></FormularioPelicula>
      {peliculasAppApp.length === 0 ? (
        <div className="text-center mt-5 display-6 text-light "> {msj}</div>
      ) : (
        <section className="d-flex justify-content-between mt-5 container">
          {peliculasAppApp.map((prlicula, index) => (
            <ArticuloPelicula>
              borrarPelicula={borrarPelicula}
              key={index}
              cita={pelicula}
            </ArticuloPelicula>
          ))}
        </section>
      )}
    </>
  );
}

export default App;
