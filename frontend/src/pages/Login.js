import React, { useState } from 'react';

import { Form, Input, Button, Container } from './login/styles';
import logo from '../assets/img/logo.png';

import api from '../services/api';
import { login } from '../services/auth';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      login(response);
      props.history.push('/dashboard');
    } catch (err) {
      return console.error(err);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Gympoint Logo" />
        <label htmlFor="email">Seu e-mail:</label>
        <Input
          id="email"
          type="email"
          placeholder="usuario@example.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor="password">Sua senha:</label>
        <Input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button type="submit">Entrar no sistema</Button>
      </Form>
    </Container>
  );
}
