import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas}) => {
  return (
    <ListGroup>
      {arrayTareas.map((tarea, posicionTarea) => (
        <ItemTarea key={posicionTarea} nombreTarea={tarea}/>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
