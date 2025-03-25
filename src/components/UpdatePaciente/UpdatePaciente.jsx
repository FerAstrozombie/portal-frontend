import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, updatePaciente } from "../../../services/crudServices.js";
import "./styles.css";

const UpdatePaciente = () => {

    const [data, setData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getById(location.state.id);
        const dataReal = data.data.paciente.message
        setData(dataReal)
    };

    const updateSchema = Yup.object().shape(
        {
            nombre: Yup.string()
                .min(3, "Nombre demasiado corto")
                .required("Nombre requerido"),
            apellido: Yup.string()
                .required("Apellido requerida"),
            dni: Yup.number()
                .min(7, "D.N.I. demasiado corto")
                .required("D.N.I. requerido"),
            email: Yup.string()
                .required("email requerido"),
            direccion: Yup.string()
                .required("Direccion requerido"),
            codigoPostal: Yup.number()
                .min(3, "Ingrese un codigo postal valido")
                .required("Codigo postal requerido"),
            fechaNacimiento: Yup.string()
                .required("Fecha de nacimiento requerida"),
            nacionalidad: Yup.string()
                .required("Nacionalidad requerida"),
            cobertura: Yup.string()
                .required("Cobertura requerido"),
        }
    )

    return (
        <Formik
            enableReinitialize={true}
            initialValues={data}
            validationSchema={updateSchema}
            onSubmit={async (values) => {

                const body = {
                    nombre: values.nombre,
                    apellido: values.apellido,
                    dni: values.dni,
                    email: values.email,
                    direccion: values.direccion,
                    codigoPostal: values.codigoPostal,
                    fechaNacimiento: values.fechaNacimiento,
                    nacionalidad: values.nacionalidad,
                    cobertura: values.cobertura,
                }
                const id = location.state.id
                const response = await updatePaciente(id, body);
                if (response.status === 400) alert(JSON.stringify(response.data))
                navigate("/");
            }}
        >
            {({ isSubmitting, errors, touched, handleChange }) => (
                <div className="padre">
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2 className="tituloCabecera">Nuevo paciente</h2>
                            <button
                                type="submit"
                                id="boton"
                            >
                                <img id="iconos" src="../../assets/save.svg" alt="guardar" />
                                SAVE
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                id="boton"
                            >
                                <img id="iconos" src="../../assets/back.svg" alt="guardar" />
                            </button>
                        </div>
                        <div className="datosPadre">
                            <h3>Datos del paciente</h3>
                            <div className="datosPaciente">
                                <div className="inputField">
                                    <label htmlFor="nombre">Nombre</label>
                                    <Field id="nombre" type="text" name="nombre" placeholder="Nombre" className="input" onChange={handleChange} />
                                    {
                                        errors.nombre && touched.nombre &&
                                        (
                                            <ErrorMessage name='nombre' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="apellido">Apellido</label>
                                    <Field id="apellido" type="text" name="apellido" placeholder="Apellido" className="input" onChange={handleChange} />
                                    {
                                        errors.apellido && touched.apellido &&
                                        (
                                            <ErrorMessage name='apellido' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="dni">D.N.I.</label>
                                    <Field id="dni" type="number" name="dni" placeholder="D.N.I." className="input" onChange={handleChange} />
                                    {
                                        errors.dni && touched.dni &&
                                        (
                                            <ErrorMessage name='dni' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" type="email" name="email" placeholder="Email" className="input" onChange={handleChange} />
                                    {
                                        errors.email && touched.email &&
                                        (
                                            <ErrorMessage name='email' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="direccion">Direccion</label>
                                    <Field id="direccion" type="text" name="direccion" placeholder="direccion" className="input" onChange={handleChange} />
                                    {
                                        errors.direccion && touched.direccion &&
                                        (
                                            <ErrorMessage name='direccion' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="codigoPostal">Codigo postal</label>
                                    <Field id="codigoPostal" type="number" name="codigoPostal" placeholder="Codigo Postal" className="input" onChange={handleChange} />
                                    {
                                        errors.codigoPostal && touched.codigoPostal &&
                                        (
                                            <ErrorMessage name='codigoPostal' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                    <Field id="fechaNacimiento" type="text" name="fechaNacimiento" placeholder="Fecha de nacimiento" className="input" onChange={handleChange} />
                                    {
                                        errors.fechaNacimiento && touched.fechaNacimiento &&
                                        (
                                            <ErrorMessage name='fechaNacimiento' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="nacionalidad">Nacionalidad</label>
                                    <Field id="nacionalidad" type="text" name="nacionalidad" placeholder="Nacionalidad" className="input" onChange={handleChange} />
                                    {
                                        errors.nacionalidad && touched.nacionalidad &&
                                        (
                                            <ErrorMessage name='nacionalidad' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="cobertura">Cobertura</label>
                                    <Field id="cobertura" type="text" name="cobertura" placeholder="Cobertura" className="input" onChange={handleChange} />
                                    {
                                        errors.cobertura && touched.cobertura &&
                                        (
                                            <ErrorMessage name='cobertura' component="div" className="error" />
                                        )
                                    }
                                </div>
                            </div>
                            {isSubmitting ? (<p>Modificando...</p>) : null}
                            <div className="botonera">
                                <button
                                    type="submit"
                                    id="boton"
                                >
                                    <img id="iconos" src="../../assets/save.svg" alt="guardar" />
                                    SAVE
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                    id="boton"
                                >
                                    <img id="iconos" src="../../assets/back.svg" alt="guardar" />
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

export default UpdatePaciente