import axios from "axios";

export const deleteOperation = async (id) => {
    let urlDeleteImpo = `http://localhost:8080/deletePaciente/${id}`
    const respuesta = await axios.delete(urlDeleteImpo, id)
    return respuesta;
};

export const getById = async (id) => {
    try {
        let urlGet = `http://localhost:8080/paciente/${id}`;
        const respuesta = await axios.get(urlGet);
        return respuesta
        
    } catch (error) {
        console.log(error);
        return error.response.status;
    }
};

export const updatePaciente = async(id, formData) => {
    let urlUpdate = `http://localhost:8080/updatePaciente/${id}`;
    return await axios.patch(urlUpdate, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const createPaciente = async (formData) => {
    let url = "http://localhost:8080/paciente";
    return await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const createCargador = async (formData) => {
    let url = "http://localhost:8080/signup";
    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        if (error.response) {
            console.error("Error del servidor:", error.response.data);
            if (error.response.data.error === "El email ya está registrado") {
                throw new Error("El email ya está registrado");
            }
            throw new Error(error.response.data.error || "Error en el servidor");
        } else if (error.request) {
            console.error("Error de red o sin respuesta del servidor:", error.request);
            throw new Error("No se pudo conectar con el servidor. Intenta nuevamente.");
        } else {
            console.error("Error desconocido:", error.message);
            throw new Error(error.message || "Ocurrió un error desconocido");
        }
    }
};

export const loginCargador = async (formData) => {
    let url = "http://localhost:8080/signin";
    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        if (error.response) {
            // Captura el mensaje de error del servidor
            console.error("Error del servidor:", error.response.data);

            // Lanza un error con el mensaje del backend
            throw new Error(error.response.data.error || "Error en el servidor");
        } else if (error.request) {
            // Error de red o sin respuesta del servidor
            console.error("Error de red o sin respuesta del servidor:", error.request);
            throw new Error("No se pudo conectar con el servidor. Intenta nuevamente.");
        } else {
            // Otro tipo de error
            console.error("Error desconocido:", error.message);
            throw new Error(error.message || "Ocurrió un error desconocido");
        }
    }
};