import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Paciente } from "../../models/paciente.class.js";
import { createPaciente } from "../../../services/crudServices.js";
import "./styles.css";
const NuevoPaciente = () => {

    let paciente = new Paciente;

    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        direccion: "",
        codigoPostal: "",
        fechaNacimiento: "",
        nacionalidad: "",
        cobertura: "",
        image: "",
    };

    const pacienteSchema = Yup.object().shape(
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
            image: Yup.string()
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={pacienteSchema}
            onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("nombre", values.nombre);
                formData.append("apellido", values.apellido);
                formData.append("dni", values.dni);
                formData.append("email", values.email);
                formData.append("direccion", values.direccion);
                formData.append("codigoPostal", values.codigoPostal);
                formData.append("fechaNacimiento", values.fechaNacimiento);
                formData.append("nacionalidad", values.nacionalidad);
                formData.append("cobertura", values.cobertura);
                formData.append("imagenAvatar", values.image); // Aquí se agrega el archivo

                const response = await createPaciente(formData); // Asegúrate de que tu servicio soporte FormData
                if (response.status === 400) alert(JSON.stringify(response.data));
                navigate("/");
            }}
        >
            {({ errors, touched, isSubmitting, setFieldValue }) => (
                <div>
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2>Paciente nuevo</h2>
                            <button
                                type="submit"
                                className="boton"
                            >
                                <img className="icono" src="../../assets/add.svg" alt="cargar paciente" />
                                AGREGAR
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                id="boton"
                            >
                                <img className="icono" src="../../assets/back.svg" alt="guardar" />
                            </button>
                        </div>
                        <div className="datosPadre">
                            <div className="datosEmbarque">
                                <div className="inputField">
                                    <label htmlFor="nombre">Nombre</label>
                                    <Field id="nombre" type="text" name="nombre" placeholder="Nombre" className="input" />
                                    {
                                        errors.nombre && touched.nombre &&
                                        (
                                            <ErrorMessage name='nombre' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="apellido">Apellido</label>
                                    <Field id="apellido" type="text" name="apellido" placeholder="Apellido" className="input" />
                                    {
                                        errors.apellido && touched.apellido &&
                                        (
                                            <ErrorMessage name='apellido' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="dni">D.N.I.</label>
                                    <Field id="dni" type="number" name="dni" placeholder="D.N.I." className="input" />
                                    {
                                        errors.dni && touched.dni &&
                                        (
                                            <ErrorMessage name='dni' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" type="email" name="email" placeholder="Email" className="input" />
                                    {
                                        errors.email && touched.email &&
                                        (
                                            <ErrorMessage name='email' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="direccion">Direccion</label>
                                    <Field id="direccion" type="text" name="direccion" placeholder="Direccion" className="input" />
                                    {
                                        errors.direccion && touched.direccion &&
                                        (
                                            <ErrorMessage name='direccion' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="codigoPostal">Codigo postal</label>
                                    <Field id="codigoPostal" type="number" name="codigoPostal" placeholder="Codigo postal" className="input" />
                                    {
                                        errors.codigoPostal && touched.codigoPostal &&
                                        (
                                            <ErrorMessage name='codigoPostal' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                    <Field id="fechaNacimiento" type="text" name="fechaNacimiento" placeholder="Fecha de nacimiento" className="input" />
                                    {
                                        errors.fechaNacimiento && touched.fechaNacimiento &&
                                        (
                                            <ErrorMessage name='fechaNacimiento' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="nacionalidad">Nacionalidad</label>
                                    <Field id="nacionalidad" type="text" name="nacionalidad" placeholder="Nacionalidad" className="input" />
                                    {
                                        errors.nacionalidad && touched.nacionalidad &&
                                        (
                                            <ErrorMessage name='nacionalidad' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="cobertura">Cobertura</label>
                                    <Field id="cobertura" type="text" name="cobertura" placeholder="Cobertura" className="input" />
                                    {
                                        errors.cobertura && touched.cobertura &&
                                        (
                                            <ErrorMessage name='cobertura' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="image">Avatar</label>
                                    <input id="image" type="file" name="image" placeholder="image" className="input" onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        setFieldValue("image", file); // Usamos setFieldValue para actualizar el valor
                                    }} />
                                    {
                                        errors.image && touched.image &&
                                        (
                                            <ErrorMessage name='image' component="div" className="error" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {isSubmitting ? (<p>Agregando...</p>) : null}
                        <div className="botoneraDos">
                            <button
                                type="submit"
                                className="boton"
                            >
                                <img className="icono" src="../../assets/add.svg" alt="" />
                                AGREGAR
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                id="boton"
                            >
                                <img className="icono" src="../../assets/back.svg" alt="guardar" />
                            </button>
                        </div>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

export default NuevoPaciente