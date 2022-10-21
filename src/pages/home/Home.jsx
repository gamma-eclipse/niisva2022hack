import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Button, TextField, Typography, styled } from '@mui/material';
import { AnalyzeCard } from 'components/analyze-card';
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
          <Button
            disabled={homeStore.fetching}
            variant="contained"
            style={{ minWidth: 200 }}
            onClick={homeStore.fetch}
            endIcon={homeStore.fetching ? <HourglassEmptyIcon /> : null}
          >
            {homeStore.fetching ? 'Загрузка' : 'Загрузить'}
          </Button>
        </FileUpload>
        {homeStore.data && homeStore.data.map((elem) => <AnalyzeCard key={elem.id} info={elem} />)}
      </div>
    </Layout>
  );
}

export default observer(Home);
