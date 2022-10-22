import AdjustIcon from '@mui/icons-material/Adjust';
import { Button, TextField, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { dynamicStore } from 'app/store/dynamicStore';
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
      <Title variant="h5">Режим активного сканирования</Title>
      <Button
        variant="contained"
        style={{ minWidth: 200 }}
        color={dynamicStore.fetching ? 'error' : 'primary'}
        onClick={dynamicStore.fetch}
        endIcon={dynamicStore.fetching ? <AdjustIcon /> : null}
      >
        {dynamicStore.fetching ? 'Остановить' : 'Запустить'}
      </Button>
    </FormLayout>
  );
}

export default observer(UploadForm);
