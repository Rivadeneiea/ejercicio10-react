import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPelicula from "./components/FormularioPelicula";

function App() {
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
