import React from 'react';
import { LoginContainer, Form, FormGroup, Label, Input, Button, Title } from '../style/styles';

function handleSubmit(event) {}

const Login = () => {
  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormGroup>
          <Label>Username:</Label>
          <Input type="text" required />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" required />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;