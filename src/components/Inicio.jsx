import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";
import { Col, Container, Row } from "react-bootstrap";
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
    <section className="mainPage">
      <div className="text-center">
        <h1 className="m-5 display-5">Lista de Tareas</h1>
      <Link to="/administrador/crear" className="my-3 btn btn-success">
        Agregar tarea
      </Link>
      </div>
      <Container>
      <Row>
        {tareas.map((tarea) => (
          <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas} />
        ))}
      </Row>
      </Container>
     
    </section>
  );
};

export default Inicio;
