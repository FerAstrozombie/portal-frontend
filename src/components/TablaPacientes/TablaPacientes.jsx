import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles.css";
import { deleteOperation } from "../../../services/crudServices.js";

const TablaPacientes = () => {

    let url = "http://localhost:8080";

    useEffect(() => {
        getData(url);
    }, [url]);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const getData = () => {
        fetch(url).then(response => response.json())
            .then(data => {
                if (data.pacientes) {
                    const dataPacientes = data.pacientes;
                    setData(dataPacientes);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error al buscar los datos, recarga la pagina",
                    });
                }
            })
            .catch(error => console.log(error))
    }

    const searcher = (e) => {
        setSearch(e.target.value);
    }

    let results = []
    if (!search) {
        results = data;
    } else {
        results = data.filter((dato) =>
            dato.dni.toString().includes(search.toLocaleLowerCase())
        )
    }

    const handleClick = id => event => {
        deleteOperation(id);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Eliminado con exito",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            location.reload();
        }, 1600);
    }

    const navigate = useNavigate();
    const handleUpdate = id => event => {
        navigate("/updatePaciente", {state: {id}})
    }

    return (
        <>
            {data.length === 0 ?
                <div className="advertencia">
                    <h4 className="advertenciaTexto">No hay pacientes cargados</h4>
                    <h4 className="advertenciaTexto">Quieres cargar uno? Haz click en el siguiente link</h4>
                    <button className="botonAgregar">
                        <a className="ancla" href="/nuevoPaciente">Agregar paciente</a>
                    </button>
                </div>
                :
                <div className="tabla">
                    <div className="buscador">
                        <div className="busqueda">
                            <button className="botones">
                                <img id="iconos" src="../../assets/search.svg" alt="" />
                            </button>
                            <input onChange={searcher} value={search} className="input" type="text" placeholder="Buscar por dni" />
                        </div>
                        <button className="botones" onClick={() => navigate("/nuevoPaciente")}>
                            <img id="iconos" src="../../assets/add.svg" alt="cargar paciente" />
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>D.N.I.</th>
                                <th>Email</th>
                                <th>Direccion</th>
                                <th>Codigo postal</th>
                                <th>Fecha de nacimiento</th>
                                <th>Nacionalidad</th>
                                <th>Cobertura</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(p => (
                                    <tr key={p._id}>
                                        <td><img id="avatar" src={p.avatar} alt="avatar" /></td>
                                        <td>{p.nombre}</td>
                                        <td>{p.apellido}</td>
                                        <td>{p.dni}</td>
                                        <td>{p.email}</td>
                                        <td>{p.direccion}</td>
                                        <td>{p.codigoPostal}</td>
                                        <td>{p.fechaNacimiento}</td>
                                        <td>{p.nacionalidad}</td>
                                        <td>{p.cobertura}</td>
                                        <td>
                                            <button onClick={(e) => handleUpdate(p._id)(e)} className="botonesAcciones">
                                                <img id="iconos" src="../../assets/config.svg" alt="configurar" />
                                            </button>
                                            <button onClick={(e) => handleClick(p._id)(e)} className="botonesAcciones">
                                                <img id="iconos" src="../../assets/trash.svg" alt="eliminar" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>

    )
}

export default TablaPacientes