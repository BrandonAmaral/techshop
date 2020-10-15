import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import Input from '../../components/InputAuth';
import Button from '../../components/ButtonAuth';
import { useAuth } from '../../hooks/auth';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      login({
        email: data.email,
        password: data.password,
      });
    },
    [login],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnMount={false}
        >
          <Form>
            <h1>Login</h1>

            <label>Email</label>
            <Input name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <label>Password</label>
            <Input name="password" type="password" />
            <ErrorMessage name="password" />

            <Link to="/register">Register</Link>

            <Button type="submit">Enter</Button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
