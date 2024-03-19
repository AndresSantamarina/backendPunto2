import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rutas from "./components/Rutas";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/administrador/*" element={<Rutas />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
