import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, styled } from '@mui/material';
import { AnalyzeRow } from 'components/analyze-row';
import { Layout } from 'components/layout';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { homeStore } from './store';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

const FileUpload = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  input {
    cursor: pointer;
  }
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <FileUpload>
          <Title variant="h5">
            {homeStore.data
              ? 'Файл успешно загружен. Анализ выгружен в таблицу ниже'
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
        </FileUpload>
        {homeStore.data && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Кол-во пакетов</TableCell>
                <TableCell align="center">Объем трафика</TableCell>
                <TableCell align="center">Протокол</TableCell>
                <TableCell align="center">Хост</TableCell>
                <TableCell align="center">Адрес назначения</TableCell>
                <TableCell align="center">Назначение</TableCell>
                <TableCell align="center">Название</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {homeStore.data.map((analyze) => (
                <AnalyzeRow key={analyze.id} analyze={analyze} />
              ))}
            </TableBody>
          </Table>
        )}
      </Wrapper>
    </Layout>
  );
}

export default observer(Home);
