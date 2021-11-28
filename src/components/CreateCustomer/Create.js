import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import CustomerForm from '../CustomerForm/Form';

// Styles
import * as S from './Styled.js';

const CreateCustomer = () => {
  // eslint-disable-next-line
  const [formValues, setFormValues] = useState({ name: '', email: '' });

  let history = useHistory();

  const onSubmit = (customerObject) => {
    axios
      .post('https://reqres.in/api/users', customerObject)
      .then((response) => {
        if (response.status === 201) {
          history.push('/');
          toast.success('Usuário criado com suscesso!', {
            position: 'bottom-right',
            autoClose: 4000,
            theme: 'colored',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          Promise.reject();
          history.push('/');
          toast.error('Algo deu errado!', {
            position: 'bottom-right',
            autoClose: 4000,
            theme: 'colored',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(() =>
        alert('Algo de errado aconteceu! Tente novamente mais tarde!')
      );
  };

  return (
    <S.CreateCustomer>
      <CustomerForm
        firstLabel="Nome:"
        secLabel="Email:"
        pathBack={() => {
          history.goBack();
        }}
        nameButton="Cadastrar"
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      />
      <S.ButtonBack
        onClick={() => {
          history.goBack();
        }}
      >
        <S.ArrowLeft />
        Voltar
      </S.ButtonBack>
    </S.CreateCustomer>
  );
};

export default CreateCustomer;
