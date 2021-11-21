import React, { useState } from "react";
import axios from "axios";
import CustomerForm from "../CustomerForm/Form";
import { useHistory } from "react-router-dom";

import "./Create.css";

const CreateCustomer = () => {
  // eslint-disable-next-line
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  let history = useHistory();

  const onSubmit = (customerObject) => {
    axios
      .post("https://reqres.in/api/users", customerObject)
      .then((response) => {
        if (response.status === 201) {
          history.push("/");
          alert("Cliente cadastrado com sucesso!");
        } else {
          Promise.reject();
          alert("Algo de errado aconteceu! Tente novamente mais tarde!");
        }
      })
      .catch(() =>
        alert("Algo de errado aconteceu! Tente novamente mais tarde!")
      );
  };

  return (
    <div className="create-customer">
      <CustomerForm
        firstLabel="Nome:"
        secLabel="Email:"
        nameButton="Cadastrar"
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      />
    </div>
  );
};

export default CreateCustomer;
