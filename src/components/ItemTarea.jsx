import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea} 
      <div>
      <Button variant="primary" className="me-2" onClick={()=> editarTarea()}>Editar</Button>
      <Button variant="danger" onClick={()=> borrarTarea(nombreTarea)}>Borrar</Button>
      </div>
      
    </ListGroup.Item>
  );
};

export default ItemTarea;
