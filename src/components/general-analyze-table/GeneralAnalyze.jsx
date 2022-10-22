import { analyzeStore } from 'app/store/analyzeStore';
import { Filters } from 'components/filters';
import { Spoiler } from 'components/spoiler';
import { observer } from 'mobx-react-lite';

import { GeneralAnalyzeTable } from './GeneralAnalyzeTable';

function GeneralAnalyze({ analyzes }) {
  return (
    <Spoiler title="Результаты анализа">
      <Filters />
      <GeneralAnalyzeTable analyzeResults={analyzes} />
    </Spoiler>
  );
}

export default observer(GeneralAnalyze);
