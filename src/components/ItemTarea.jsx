import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaAPI, leerTareasAPI } from "../helpers/queries";
import { Link } from "react-router-dom";

const ItemTarea = ({ tarea, setTareas }) => {
  const borrarTarea = () => {
    Swal.fire({
      title: "Estás seguro de eliminar la tarea?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Salir",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Tarea eliminada!",
            text: `La tarea "${tarea.nombreTarea}" fue eliminada correctamente`,
            icon: "success",
          });
          const listaTareas = await leerTareasAPI();
          setTareas(listaTareas);
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `La tarea "${tarea.nombreTarea}" no fue eliminada, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.nombreTarea}
      <div>
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/administrador/editar/" + tarea._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={borrarTarea}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
