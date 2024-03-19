import { Route, Routes } from "react-router";
import Inicio from "./Inicio";
import FormularioTarea from "./FormularioTarea";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route
          exact
          path="/crear"
          element={<FormularioTarea editar={false} titulo="Crear tarea" />}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<FormularioTarea editar={true} titulo="Editar tarea" />}
        ></Route>
      </Routes>
    </>
  );
};

export default Rutas;
