import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getById } from "../../../services/crudServices";
import "./styles.css";
const Credencial = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};
    const [data, setData] = useState({});

    const paciente = data?.data?.paciente?.message || null
    useEffect(() => {
        if (id) {
            getById(id)
                .then((dataPaciente) => {
                    setData(dataPaciente); // Actualiza el estado con los datos obtenidos
                })
                .catch((error) => {
                    console.error("Error al obtener los datos del paciente:", error);
                });
        }
    }, [id]);

    return (

        <>
            <div>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    id="boton"
                >
                    <img id="iconos" src="../../assets/back.svg" alt="volver" />
                </button>

                <div className="containerPadre">
                    {
                        paciente ? (
                            <div className="containerCredencial">
                                <img src={paciente.avatar} className="avatar" alt="avatar" />
                                <div className="text-content">
                                    <h4>Nombre y apellido: {paciente.nombre} {paciente.apellido}</h4>
                                    <h4>Fecha de Nacimiento: {paciente.fechaNacimiento}</h4>
                                    <h4>D.N.I.: {paciente.dni}</h4>
                                    <h4>Obra Social:</h4>
                                    <h4>{paciente.cobertura}</h4>
                                </div>
                            </div>
                        ) : <h4 className="advertenciaTexto">No hay pacientes cargados</h4>
                    }
                </div>

            </div>
        </>
    )
}

export default Credencial