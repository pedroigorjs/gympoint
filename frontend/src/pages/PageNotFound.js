import React from 'react';
import { Container, Code, Message } from '../components/Error';

export default function PageNotFound() {
  return (
    <Container>
      <Code>404</Code>
      <Message>Oops!! Page Not Found</Message>
    </Container>
  );
}
