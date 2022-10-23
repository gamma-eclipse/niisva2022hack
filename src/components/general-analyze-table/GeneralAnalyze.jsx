import { Typography } from '@mui/material';
import { Filters } from 'components/filters';
import { Spoiler } from 'components/spoiler';
import { observer } from 'mobx-react-lite';

import { GeneralAnalyzeTable } from './GeneralAnalyzeTable';

function GeneralAnalyze({ analyzes }) {
  return (
    <Spoiler title="Результаты анализа">
      <Typography style={{ marginBottom: 5 }}>Отображены первые 500 пакетов</Typography>
      <Filters />
      <GeneralAnalyzeTable analyzes={analyzes} />
    </Spoiler>
  );
}

export default observer(GeneralAnalyze);
