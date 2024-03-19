import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearTareaAPI,
  editarTareaAPI,
  obtenerTareaAPI,
} from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const FormularioTarea = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate();

  const cargarDatosTarea = async () => {
    try {
      const respuesta = await obtenerTareaAPI(id);
      if (respuesta.status === 200) {
        const tareaEncontrada = await respuesta.json();
        setValue("nombreTarea", tareaEncontrada.nombreTarea);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editar === true) {
      cargarDatosTarea();
    } else {
    }
  }, []);

  const tareaValidada = async (tarea) => {
    if (editar === true) {
      const respuesta = await editarTareaAPI(tarea, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Tarea modificada",
          text: `La tarea ${tarea.nombreTarea} fue modificada correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La tarea ${tarea.nombreTarea} no pudo ser modificada, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearTareaAPI(tarea);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Tarea creada",
          text: `La tarea ${tarea.nombreTarea} fue creada correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La tarea ${tarea.nombreTarea} no pudo ser creada, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <h2>{titulo}</h2>
      <Form onSubmit={handleSubmit(tareaValidada)}>
        <Form.Group className="mb-3 d-flex" controlId="formNombreTarea">
          <Form.Control
            type="text"
            placeholder="Tarea 1..."
            {...register("nombreTarea", {
              required: "La tarea es obligatoria",
              minLength: {
                value: 3,
                message: "La tarea debe tener como mínimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener como máximo 50 caracteres",
              },
            })}
          />
          <Button variant="dark" className="ms-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;
