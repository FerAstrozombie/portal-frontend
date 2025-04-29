import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginCargador } from "../../../services/crudServices.js";
import { useState } from "react";
import "./styles.css";

const Signin = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const controladorSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email("Formato de email inválido")
                .required("Email requerido"),
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
                    email: values.email,
                    password: values.password,
                };
                try {
                    const response = await loginCargador(cargador);
                    navigate("/");
                } catch (error) {
                    if (error.response) {
                        setErrorMessage(error.response.data.error || "Error en el servidor");
                    } else if (error.request) {
                        setErrorMessage("No se pudo conectar con el servidor. Intenta nuevamente.");
                    } else {
                        setErrorMessage(error.message || "Ocurrió un error desconocido");
                    }
                    console.log("Mensaje de error:", error.message);
                }
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
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
                                        <Field id="password" type="password" name="password" placeholder="Password" className="input" />
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
                                    disabled={isSubmitting}
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