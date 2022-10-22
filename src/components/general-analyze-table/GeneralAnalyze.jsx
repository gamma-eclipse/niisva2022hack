import { analyzeStore } from 'app/store/analyzeStore';
import { Filters } from 'components/filters';
import { Spoiler } from 'components/spoiler';
import { observer } from 'mobx-react-lite';

import { GeneralAnalyzeTable } from './GeneralAnalyzeTable';

function GeneralAnalyze() {
  return (
    <Spoiler title="Результаты анализа">
      <Filters />
      {analyzeStore.analyzes && <GeneralAnalyzeTable analyzeResults={analyzeStore.filteredAnalyzes} />}
    </Spoiler>
  );
}

export default observer(GeneralAnalyze);
