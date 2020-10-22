import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';
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
        <h1>Create an account</h1>
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
          validateOnChange={false}
        >
          <Form>
            <Label>Email</Label>
            <Input name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <Label>Username</Label>
            <Input name="username" autoComplete="off" />
            <ErrorMessage name="username" />

            <Label>Password</Label>
            <Input name="password" type="password" />
            <ErrorMessage name="password" />

            <Label>Confirm Password</Label>
            <Input name="password_confirm" type="password" />
            <ErrorMessage name="password_confirm" />

            <Link to="/login">Already have an account?</Link>

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default Register;
