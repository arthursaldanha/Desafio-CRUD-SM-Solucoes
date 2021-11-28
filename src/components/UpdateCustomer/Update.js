import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

//Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import CustomerForm from '../CustomerForm/Form';

// Styles
import * as S from './Styled.js';

// Components
import Loading from '../Loading/Loading';

const UpdateCustomer = () => {
  // eslint-disable-next-line
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  const onSubmit = (customertObject) => {
    axios
      .put('https://reqres.in/api/users', customertObject)
      .then((response) => {
        if (response.status === 200) {
          history.push('/');
          toast.success('Usuário atualizado com suscesso!', {
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
      });
  };

  const fetchInputData = async () => {
    setLoading(true);
    const response = await axios.get('https://reqres.in/api/users/' + id);
    const { email, first_name, last_name } = response.data.data;
    const name = `${first_name} ${last_name}`;
    setFormValues({ name, email });
    setLoading(false);
  };

  useEffect(() => {
    fetchInputData();
    // eslint-disable-next-line
  }, [id]);

  return (
    <S.UpdateCustomer>
      {loading && <Loading />}
      <CustomerForm
        firstLabel="Nome:"
        secLabel="Email:"
        nameButton="Atualizar"
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
    </S.UpdateCustomer>
  );
};

export default UpdateCustomer;
