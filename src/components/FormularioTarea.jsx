import { Button, Form } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Tarea 1..." minLength={3} maxLength={50} />
          <Button variant="dark" className="ms-2" type="submit">Agregar tarea</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;
