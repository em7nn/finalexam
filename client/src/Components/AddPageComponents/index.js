import React from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Addpag() {
    return (
        <>
        <div className='obsi'>
        <div className='formik'>
        <Formik
                initialValues={{ heading: '', date: '', comments: '', file: '', imageUrl: '', description: '' }}
                validationSchema={Yup.object({
                    heading: Yup.string()

                        .required('Required'),
                    date: Yup.string()

                        .required('Required'),
                    comments: Yup.string()

                        .required('Required'),
                    file: Yup.string()

                        .required('Required'),

                    imageUrl: Yup.string()

                        .required('Required'),

                    description: Yup.string()

                        .required('Required'),

                })}
                onSubmit={(values) => {
                  axios.post("http://localhost:1111/popular",values)
                }}
            >    
                <Form className='form'>
                    <label htmlFor="heading">heading</label>
                    <Field name="heading" type="text" />
                    <ErrorMessage name="heading" />

                    <label htmlFor="date">date</label>
                    <Field name="date" type="text" />
                    <ErrorMessage name="date" />

                    <label htmlFor="comments">comments</label>
                    <Field name="comments" type="text" />
                    <ErrorMessage name="comments" />

                       <label htmlFor="file">file</label>
                    <Field name="file" type="text" />
                    <ErrorMessage name="file" />

                    <label htmlFor="imageUrl">imageUrl</label>
                    <Field name="imageUrl" type="text" />
                    <ErrorMessage name="imageUrl" />

                    <label htmlFor="description">description</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />



                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        </div>
          
        </>
    )
}

export default Addpag