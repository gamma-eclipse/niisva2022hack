import { styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { filtersStore } from 'app/store/filtersStore';
import { Categories } from 'components/categories';
import { Filters } from 'components/filters';
import { GeneralAnalyzeTable } from 'components/general-analyze-table';
import { Layout } from 'components/layout';
import { UploadForm } from 'components/upload-form';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div', { shouldForwardProp: (p) => p !== 'dataFetched' })`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.7s ease-in-out;
  padding-top: ${(props) => (props.dataFetched ? '0' : '30vh')};
`;

function Home() {
  return (
    <Layout>
      <Wrapper dataFetched={analyzeStore.analyzes}>
        <UploadForm />
        {analyzeStore.analyzes && (
          <>
            <Categories />
            <Filters />
            <GeneralAnalyzeTable analyzeResults={analyzeStore.filteredAnalyzes} />
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

export default observer(Home);
