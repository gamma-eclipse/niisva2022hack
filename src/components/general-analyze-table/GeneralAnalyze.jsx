import { Button, Collapse, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { Filters } from 'components/filters';
import { Spoiler } from 'components/spoiler';
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
  return (
    <Spoiler title="Результаты анализа">
      <Filters />
      {analyzeStore.analyzes && <GeneralAnalyzeTable analyzeResults={analyzeStore.filteredAnalyzes} />}
    </Spoiler>
  );
}

export default observer(GeneralAnalyze);
