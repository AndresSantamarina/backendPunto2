import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas, borrarTarea}) => {
  return (
    <ListGroup>
      {arrayTareas.map((tarea, posicionTarea) => (
        <ItemTarea key={posicionTarea} nombreTarea={tarea} borrarTarea={borrarTarea}/>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
