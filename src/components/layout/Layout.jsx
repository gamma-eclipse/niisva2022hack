import { Container } from '@mui/material';
import React from 'react';

export function Layout({ children }) {
  return (
    <Container
      maxWidth="lg"
      style={{
        padding: 25,
        paddingTop: '40vh',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </Container>
  );
}
