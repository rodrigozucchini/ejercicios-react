import React from 'react';
import { Tarea } from './tarea';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const FormulariosTarea = () => {

    let tarea = new Tarea();

    const initialValues = {
        titulo: "",
        nivel: ""
    }

    const registerSchema = Yup.object().shape(
        {
            titulo: Yup.string()
                .min(4, "El titulo de la tarea es corto")
                .max(30, "El titulo de la tarea es largo")
                .required("El titulo de la tarea es requerida"),
            nivel: Yup.string()
                    .required("El nivel de la tarea es requerido")
        }
    )

    const submit = (values) => {
        alert("Registrar Tarea")
    }

    return (
        <div>
            <h4>Registar Tarea</h4>
            <Formik
                // Iniciar valor que tomará
                initialValues={initialValues}
                //Validacion de YUP
                validationSchema={ registerSchema }
                //Evento onSUBMIT
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur}) => (
                        <Form>
                            <label htmlFor="titulo">Titulo de la tarea</label>
                            <Field name="titulo" type="text" placeholder="Titulo de la tarea"/>


                            <Field as="select" name="nivel">
                            <option value="normal">Normal</option>
                            <option value="urgente">Urgente</option>
                            </Field>

                                {/*ERRORES DEL NIVEL*/}
                                {
                                errors.nivel  && 
                                (
                                    <ErrorMessage component="div" name="nivel" />
                                )
                            }
                                {/*ERORRES DE TITULOS*/}
                            {
                                errors.titulo && touched.titulo && 
                                (
                                    <ErrorMessage component="div" name="titulo" />
                                )
                            }
                                
                            <button type="submit">Registrar Tarea</button>
                            { isSubmitting ? <p>Enviar Tarea</p> : null }
                        </Form>
                        )} 

            </Formik>
        </div>
    );
}

export default FormulariosTarea;