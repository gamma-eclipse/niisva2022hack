import { Button, Collapse, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { Filters } from 'components/filters';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { GeneralAnalyzeTable } from './GeneralAnalyzeTable';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Head = styled('div')`
  display: flex;
  gap: 25px;
  align-items: flex-end;
`;

function GeneralAnalyze() {
  const [open, setOpen] = useState(true);

  return (
    <Wrapper>
      <Head>
        <Typography variant="h4">Результаты анализа</Typography>
        <Button variant="contained" onClick={() => setOpen(!open)}>
          {open ? 'Закрыть' : 'Открыть'}
        </Button>
      </Head>
      <Collapse in={open} timeout="auto">
        <Filters />
        {analyzeStore.analyzes && <GeneralAnalyzeTable analyzeResults={analyzeStore.filteredAnalyzes} />}
      </Collapse>
    </Wrapper>
  );
}

export default observer(GeneralAnalyze);
