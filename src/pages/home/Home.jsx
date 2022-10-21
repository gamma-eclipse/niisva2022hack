import { Button, TextField, Typography, styled } from '@mui/material';
import { Layout } from 'components/layout';
import React from 'react';

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

const FileUpload = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  gap: 15px;

  input {
    cursor: pointer;
  }
`;

export function Home() {
  return (
    <Layout>
      <FileUpload>
        <Title variant="h5">Прикрепите pickup файл для анализа</Title>
        <TextField type="file" style={{ cursor: 'pointer' }} />
        <Button variant="contained" style={{ minWidth: 200 }}>
          Загрузить
        </Button>
      </FileUpload>
    </Layout>
  );
}
