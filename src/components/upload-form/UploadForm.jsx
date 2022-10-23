import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Button, TextField, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

const FormLayout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  input {
    cursor: pointer;
  }
`;
const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

function UploadForm() {
  const [file, setFile] = useState(null);

  return (
    <FormLayout>
      <Title variant="h5">
        {analyzeStore.analyzes
          ? 'Файл успешно загружен. Результаты выгружены в таблицу'
          : 'Прикрепите pickup файл для анализа'}
      </Title>
      <TextField
        type="file"
        style={{ cursor: 'pointer' }}
        onChange={(e) => {
          setFile(e.target.files[0]);
          // analyzeStore.fetch(e.target.files[0]);
        }}
      />
      <Button
        disabled={analyzeStore.fetching}
        variant="contained"
        style={{ minWidth: 200 }}
        onClick={() => analyzeStore.fetch(file)}
        endIcon={analyzeStore.fetching ? <HourglassEmptyIcon /> : null}
      >
        {analyzeStore.fetching ? 'Загрузка' : 'Загрузить'}
      </Button>
    </FormLayout>
  );
}

export default observer(UploadForm);
