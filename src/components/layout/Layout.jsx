import { Container } from '@mui/material';
import React from 'react';
import { Header } from 'widgets/header';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        style={{
          padding: 25,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Container>
    </div>
  );
}
