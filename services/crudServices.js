import axios from "axios";

export const deleteOperation = async (id) => {
    let urlDeleteImpo = `http://localhost:8080/deletePaciente/${id}`
    const respuesta = await axios.delete(urlDeleteImpo, id)
    return respuesta;
};

export const getById = async (id) => {
    let urlGet = `http://localhost:8080/paciente/${id}`;
    const respuesta = await axios.get(urlGet);
    return respuesta
};

export const updatePaciente = async(id, body) => {
    let urlUpdate = `http://localhost:8080/updatePaciente/${id}`;
    const respuesta = await axios.patch(urlUpdate, body)
    return respuesta
};

export const createPaciente = async (formData) => {
    let url = "http://localhost:8080/paciente";
    return await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};