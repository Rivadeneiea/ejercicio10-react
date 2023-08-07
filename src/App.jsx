import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPelicula from "./components/FormularioPelicula";
import { useEffect, useState } from "react";
import ArticuloPelicula from "./components/ArticuloPelicula";
import Footer from "./components/Footer";

function App() {
  let peliculaLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];
  const [peliculasApp, setPeliculasApp] = useState(peliculaLocalStorage);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculasApp));
  }, [peliculasApp]);

  const crearPelicula = (pelicula) => {
    setPeliculasApp([...peliculasApp, pelicula]);
  };

  const borrarPelicula = (id) => {
    const crearNuevaPelicula = peliculasApp.filter(
      (pelicula) => pelicula.id !== id
    );
    if (peliculasApp.id !== id) {
      setPeliculasApp(crearNuevaPelicula);
    }
  };
  const msj = "no hay peliculas";
  return (
    <>
      <div className="text-center text-danger">
        <h1>Alta de peliculas</h1>
      </div>
      <FormularioPelicula crearPelicula={crearPelicula}></FormularioPelicula>
      {peliculasApp.length === 0 ? (
        <div className="text-center my-5 display-6 text-light "> {msj}</div>
      ) : (
        <section className="d-flex justify-content-between mt-5 container">
          {peliculasApp.map((pelicula) => (
            <ArticuloPelicula
              borrarPelicula={borrarPelicula}
              key={pelicula.id}
              pelicula={pelicula}
            ></ArticuloPelicula>
          ))}
        </section>
      )}
      <Footer />
    </>
  );
}

export default App;
