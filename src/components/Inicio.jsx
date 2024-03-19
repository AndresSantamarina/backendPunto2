import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";
import { Row } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerTareasAPI();
      setTareas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="mainSection">
      <h1>Lista de Tareas</h1>
      <Link to="/administrador/crear" className="my-3 btn btn-primary">
        Agregar tarea
      </Link>
      <Row>
        {tareas.map((tarea) => (
          <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas} />
        ))}
      </Row>
    </section>
  );
};

export default Inicio;
