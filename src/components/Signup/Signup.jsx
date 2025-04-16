import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createCargador } from "../../../services/crudServices.js";

const Signup = () => {

    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        contraseña: "",
    };

    const controladorSchema = Yup.object().shape(
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
            contraseña: Yup.string()
                .min(6, "Contraseña demasiado corta")
                .required("Contraseña requerida"),
            /* image: Yup.string() */
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={controladorSchema}
            onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("nombre", values.nombre);
                formData.append("apellido", values.apellido);
                formData.append("dni", values.dni);
                formData.append("email", values.email);
                formData.append("contraseña", values.contraseña);
                /* formData.append("imagenAvatar", values.image); // Aquí se agrega el archivo */
                try {
                    const response = await createCargador(formData);
                    console.log("Respuesta del servidor:", response);
                    if (response.status === 400) alert(JSON.stringify(response.data));
                    navigate("/");
                } catch (error) {
                    console.error("Error al enviar la solicitud:", error);
                }
            }}
        >
            {({ errors, touched, isSubmitting, setFieldValue }) => (
                <div>
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2>Nuevo cargador</h2>
                            <button
                                type="submit"
                                className="boton"
                            >
                                <img className="icono" src="../../assets/add.svg" alt="cargar" />
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
                                    <label htmlFor="cobertura">Contraseña</label>
                                    <Field id="contraseña" type="text" name="contraseña" placeholder="Contraseña" className="input" />
                                    {
                                        errors.contraseña && touched.contraseña &&
                                        (
                                            <ErrorMessage name='contraseña' component="div" className="error" />
                                        )
                                    }
                                </div>
                                {/* <div className="inputField">
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
                                </div> */}
                            </div>
                        </div>
                        {isSubmitting ? (<p>Agregando...</p>) : null}
                        <div className="botoneraDos">
                            <button
                                type="submit"
                                className="boton"
                            >
                                <img className="icono" src="../../assets/add.svg" alt="cargar" />
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

export default Signup