import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
import { useEffect, useState } from "react";
import { leerTareasAPI } from "../helpers/queries";

const ListaTareas = () => {
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
    <ListGroup>
      {tareas.map((tarea, posicionTarea) => (
        <ItemTarea key={posicionTarea} tarea={tarea} setTareas={setTareas} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
