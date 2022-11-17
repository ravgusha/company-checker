import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { isINNLegalEntity } from '../../validation';

import './style.scss';
import Button from '../Button';

interface IInnForm {
  onSubmit: (enteredInn: string) => void;
  key: number;
}

const InnForm = ({ onSubmit }: IInnForm) => {
  const [disabled, setDisabled] = useState(false);

  const validationsSchema = yup.object().shape({
    inn: yup.string().test('INN', 'ИНН не валидный', isINNLegalEntity),
  });

  return (
    <Formik
      initialValues={{
        inn: '',
      }}
      onSubmit={(values) => {
        onSubmit(values.inn);
        setDisabled(true);
      }}
      validationSchema={validationsSchema}
    >
      <Form>
        <div>
          <Field name="inn" placeholder="Введите ИНН" disabled={disabled} className="inn-input" />
          <Button
            type="submit"
            disabled={disabled}
            className="inn-btn"
            label={disabled ? 'Добавлено' : 'Добавить'}
          ></Button>
        </div>
        <ErrorMessage name="inn" render={(msg) => <p className="error">{msg}</p>} />
      </Form>
    </Formik>
  );
};

export default InnForm;
