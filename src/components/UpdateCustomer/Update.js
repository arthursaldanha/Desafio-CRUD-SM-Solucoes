import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "../CustomerForm/Form";
import { useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./Update.css";

// Components
import Loading from "../Loading/Loading";

const UpdateCustomer = () => {
  // eslint-disable-next-line
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  const onSubmit = (customertObject) => {
    axios
      .put("https://reqres.in/api/users", customertObject)
      .then((response) => {
        if (response.status === 200) {
          history.push("/");
          alert("Cliente atualizado com sucesso!");
        } else {
          Promise.reject();
          alert("Algo de errado aconteceu! Tente novamente mais tarde!")
          history.push("/");
        }
      })
  };

  const fetchInputData = async () => {
    setLoading(true)
    const response = await axios.get("https://reqres.in/api/users/" + id)
    const { email, first_name, last_name } = response.data.data;
    const name = `${first_name} ${last_name}`;
    setFormValues({ name, email });
    setLoading(false)
  }

  useEffect(() => {
    fetchInputData();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="update-customer">
      {loading && <Loading />}
      <CustomerForm
        firstLabel="Nome:"
        secLabel="Email:"
        nameButton="Atualizar"
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      />
      <button className="button-back" onClick={() => {history.goBack()}}><FiArrowLeft />Voltar</button>
    </div>
  );
};

export default UpdateCustomer;
