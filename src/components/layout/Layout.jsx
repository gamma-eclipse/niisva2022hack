import { Container } from '@mui/material';
import React from 'react';
import { Header } from 'widgets/header';

export function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        style={{
          padding: 25,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Container>
    </div>
  );
}
