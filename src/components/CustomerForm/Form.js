import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Styles
import "./Form.css";

const CustomerForm = ({ firstLabel, secLabel, nameButton, ...restProps }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório!"),
    email: Yup.string()
      .email("Por favor, insira um email válido!")
      .required("Este campo é obrigatório!"),
  });

  const validateName = (value) => {
    let errorMessage;
    if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/gi.test(value)) {
      errorMessage = "Por favor, insira o nome corretamente!";
    }
    return errorMessage;
  };

  const validateEmail = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test(value)) {
      errorMessage = "Por favor, insira um email válido!";
    }
    return errorMessage;
  };

  return (
    <div className="form-wrapper">
      <Formik {...restProps} validationSchema={validationSchema}>
        {({ isValid, dirty }) => {
          return (
            <Form>
              <label htmlFor="name">
                <span>{firstLabel}</span>
                <Field
                  name="name"
                  type="text"
                  validate={validateName}
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="input-error"
                />
              </label>
              <label htmlFor="email">
                <span>{secLabel}</span>
                <Field
                  name="email"
                  type="text"
                  validate={validateEmail}
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="input-error"
                />
              </label>
              <button
                disabled={!(isValid && dirty)}
                className="button-form"
                type="submit"
              >
                {nameButton}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CustomerForm;
