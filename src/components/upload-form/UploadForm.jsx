import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Button, TextField, Typography, styled } from '@mui/material';
import { homeStore } from 'app/store/homeStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

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
  return (
    <FormLayout>
      <Title variant="h5">
        {homeStore.data
          ? 'Файл успешно загружен. Результат выгружен в таблицу ниже'
          : 'Прикрепите pickup файл для анализа'}
      </Title>
      <TextField type="file" style={{ cursor: 'pointer' }} />
      <Button
        disabled={homeStore.fetching}
        variant="contained"
        style={{ minWidth: 200 }}
        onClick={homeStore.fetch}
        endIcon={homeStore.fetching ? <HourglassEmptyIcon /> : null}
      >
        {homeStore.fetching ? 'Загрузка' : 'Загрузить'}
      </Button>
    </FormLayout>
  );
}

export default observer(UploadForm);
