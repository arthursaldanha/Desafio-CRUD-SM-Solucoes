import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ContainerForm = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 370px;
  width: 100%;
`;

export const FORMIK = styled(Formik)``;

export const FORM = styled(Form)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TitleField = styled.span`
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const FIELD = styled(Field)`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #000;
  color: #090a0d;
  height: 45px;
  padding: 0 12px;
`;

export const ERRORMESSAGE = styled(ErrorMessage)`
  color: #ff6d6d;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 5px;
`;

export const ButtonForm = styled.button`
  align-self: center;
  background-color: #42a5f5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 15px;
  width: 130px;
  &:disabled {
    background-color: #cccccc;
  }
`;
