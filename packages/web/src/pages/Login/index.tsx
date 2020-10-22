import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';
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
        <h1>Welcome</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
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

            <Label>Password</Label>
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
