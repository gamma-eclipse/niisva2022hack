import { styled } from '@mui/material';
import { homeStore } from 'app/store/homeStore';
import { Filters } from 'components/filters';
import { GeneralAnalyzeTable } from 'components/general-analyze-table';
import { Layout } from 'components/layout';
import { UploadForm } from 'components/upload-form';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div', { shouldForwardProp: (p) => p !== 'dataFetched' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  transition: all 0.7s ease-in-out;
  padding-top: ${(props) => (props.dataFetched ? '0' : '30vh')};
`;

function Home() {
  return (
    <Layout>
      <Wrapper dataFetched={homeStore.data}>
        <UploadForm />
        {homeStore.data && (
          <>
            <Filters />
            <GeneralAnalyzeTable analyzeResults={homeStore.data} />
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

export default observer(Home);
