import React from 'react';
import * as Yup from 'yup';

// Styles
import * as S from './Styled.js';

const CustomerForm = ({ firstLabel, secLabel, nameButton,...restProps }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Este campo é obrigatório!'),
    email: Yup.string()
      .email('Por favor, insira um email válido!')
      .required('Este campo é obrigatório!'),
  });

  const validateName = (value) => {
    let errorMessage;
    if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/gi.test(value)) {
      errorMessage = 'Por favor, insira o nome corretamente!';
    }
    return errorMessage;
  };

  const validateEmail = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test(value)) {
      errorMessage = 'Por favor, insira um email válido!';
    }
    return errorMessage;
  };

  return (
    <S.ContainerForm>
      <S.FORMIK {...restProps} validationSchema={validationSchema}>
        {({ isValid, dirty }) => {
          return (
            <S.FORM>
              <S.Label htmlFor="name">
                <S.TitleField>{firstLabel}</S.TitleField>
                <S.FIELD
                  name="name"
                  type="text"
                  validate={validateName}
                />
                <S.ERRORMESSAGE
                  name="name"
                />
              </S.Label>
              <S.Label htmlFor="email">
                <S.TitleField>{secLabel}</S.TitleField>
                <S.FIELD
                  name="email"
                  type="text"
                  validate={validateEmail}
                />
                <S.ERRORMESSAGE
                  name="email"
                />
              </S.Label>
              <S.ButtonForm
                disabled={!(isValid && dirty)}
                type="submit"
              >
                {nameButton}
              </S.ButtonForm>
            </S.FORM>
          );
        }}
      </S.FORMIK>
    </S.ContainerForm>
  );
};

export default CustomerForm;
