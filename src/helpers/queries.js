const URL_Tareas = import.meta.env.VITE_API_TAREAS;
const URL_Tarea = import.meta.env.VITE_API_TAREA;

export const leerTareasAPI = async () => {
    try {
        const respuesta = await fetch(URL_Tareas);
        const listaTareas = await respuesta.json()
        return listaTareas
    } catch (error) {
        console.log(error)
    }
}

export const obtenerTareaAPI = async (id) => {
    try {
        const respuesta = await fetch(URL_Tarea + '/' + id);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearTareaAPI = async (tareaNueva) => {
    try {
        const respuesta = await fetch(URL_Tareas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaNueva)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarTareaAPI = async (tareaModificada, id) => {
    try {
        const respuesta = await fetch(`${URL_Tarea}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaModificada)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarTareaAPI = async (id) => {
    try {
        const respuesta = await fetch(`${URL_Tarea}/${id}`, {
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}