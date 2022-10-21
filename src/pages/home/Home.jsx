import { Button, TextField, Typography, styled } from '@mui/material';
import { Layout } from 'components/layout';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { homeStore } from './store';

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

function Home() {
  return (
    <Layout>
      <div>
        <FileUpload>
          <Title variant="h5">Прикрепите pickup файл для анализа</Title>
          <TextField type="file" style={{ cursor: 'pointer' }} />
          <Button disabled={homeStore.fetching} variant="contained" style={{ minWidth: 200 }} onClick={homeStore.fetch}>
            {homeStore.fetching ? 'Загрузка...' : 'Загрузить'}
          </Button>
        </FileUpload>
        {homeStore.fetched && homeStore.data.map((elem) => <div key={elem.id}>{elem.target}</div>)}
      </div>
    </Layout>
  );
}

export default observer(Home);
