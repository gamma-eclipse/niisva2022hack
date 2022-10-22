import { styled } from '@mui/material';
import { GeneralAnalyzeTable } from 'components/general-analyze-table';
import { Layout } from 'components/layout';
import { UploadForm } from 'components/upload-form';
import { observer } from 'mobx-react-lite';

import { homeStore } from './store';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <UploadForm />
        {homeStore.data && <GeneralAnalyzeTable analyzeResults={homeStore.data} />}
      </Wrapper>
    </Layout>
  );
}

export default observer(Home);
