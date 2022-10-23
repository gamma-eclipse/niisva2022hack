import { styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { Categories } from 'components/categories';
import GeneralAnalyze from 'components/general-analyze-table/GeneralAnalyze';
import { GeneralInfo } from 'components/general-info';
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
        {/* {analyzeStore.analyzes && analyzeStore.categories && ( */}
        {analyzeStore.analyzes && (
          <>
            {/* <GeneralInfo analyzes={analyzeStore.filteredAnalyzes} /> */}
            {/* <Categories categories={analyzeStore.categories} /> */}
            <GeneralAnalyze analyzes={analyzeStore.filteredAnalyzes} />
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

export default observer(Home);
