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
    console.log(formData);
    let url = "http://localhost:8080/cargadores";
    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Necesario para enviar archivos
            },
        });
        console.log(response);
        
        return response;
    } catch (error) {
        console.error("Error en la petición POST:", error);
        throw error;
    }
};