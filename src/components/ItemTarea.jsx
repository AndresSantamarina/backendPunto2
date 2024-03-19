import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaAPI, leerTareasAPI } from "../helpers/queries";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="w-50 overflow-hidden">
        <span className="text-truncate">{tarea.nombreTarea}</span>
      </div>
      <div>
        <Link
          className="me-lg-2 btn btn-warning m-1 editar"
          to={"/administrador/editar/" + tarea._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarTarea} className="m-1 borrar">
          <i className="bi bi-trash"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
