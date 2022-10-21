import { Container } from '@mui/material';
import React from 'react';

export function Layout({ children }) {
  return (
    <Container maxWidth="lg" style={{ paddingTop: 25 }}>
      {children}
    </Container>
  );
}
