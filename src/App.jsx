import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center">Bienvenido</h1>
        <FormularioTarea />
      </Container>
      <Footer />
    </>
  );
}

export default App;
