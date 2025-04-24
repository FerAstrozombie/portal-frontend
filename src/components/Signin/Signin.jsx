import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createCargador } from "../../../services/crudServices.js";
import "./styles.css";

const Signin = () => {

    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        password: "",
    };

    const controladorSchema = Yup.object().shape(
        {
            email: Yup.string()
                .required("email requerido"),
            password: Yup.string()
                .min(6, "Contraseña demasiado corta")
                .required("Contraseña requerida"),
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={controladorSchema}
            onSubmit={async (values) => {
                const cargador = {
                    nombre: values.nombre,
                    email: values.email
                }
                try {
                    const response = await createCargador(cargador);
                    console.log(response);
                    if (response.status === 400) alert(JSON.stringify(response.data))
                    else (navigate("/"));
                } catch (error) {
                    console.error("Error al enviar la solicitud:", error);
                }
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <div>
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2>Login</h2>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                id="boton"
                            >
                                <img className="icono" src="../../assets/back.svg" alt="guardar" />
                            </button>
                        </div>
                        <div id="datosPadre">
                            <div id="datosEmbarque">
                                <div className="inputs">
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
                                        <label htmlFor="password">Password</label>
                                        <Field id="password" type="text" name="password" placeholder="Password" className="input" />
                                        {
                                            errors.password && touched.password &&
                                            (
                                                <ErrorMessage name='password' component="div" className="error" />
                                            )
                                        }
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="boton"
                                >
                                    <img className="icono" src="../../assets/add.svg" alt="login" />
                                    Login
                                </button>
                            </div>
                        </div>
                        {isSubmitting ? (<p>Logueando...</p>) : null}
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signin