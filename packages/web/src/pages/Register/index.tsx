import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik';

import { Container, Content } from './styles';
import Input from '../../components/InputAuth';
import Button from '../../components/ButtonAuth';
import api from '../../services/api';

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
}

const Register: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      await api.post('/users/create-user', data);

      history.push('/login');
    },
    [history],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    password_confirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match',
    ),
  });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
            confirm_password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnMount={false}
        >
          <Form>
            <h1>Register</h1>

            <label>Email</label>
            <Input name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <label>Username</label>
            <Input name="username" autoComplete="off" />
            <ErrorMessage name="username" />

            <label>Password</label>
            <Input name="password" type="password" />
            <ErrorMessage name="password" />

            <label>Confirm Password</label>
            <Input name="password_confirm" type="password" />
            <ErrorMessage name="password_confirm" />

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default Register;
