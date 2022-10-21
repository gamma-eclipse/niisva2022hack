import { TextField, Typography, styled } from '@mui/material';
import { Layout } from 'components/layout';
import React from 'react';

const FileUpload = styled('div')`
  display: flex;
  text-align: center;
  flex-direction: column;
  max-width: 500px;
  gap: 20;
`;

export function Home() {
  return (
    <Layout>
      <FileUpload>
        <Typography variant="h5">Pickup файл</Typography>
        <TextField type="file" />
      </FileUpload>
    </Layout>
  );
}
