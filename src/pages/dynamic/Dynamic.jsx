import { Button, Typography, styled } from '@mui/material';
import { dynamicStore } from 'app/store/dynamicStore';
import { Categories } from 'components/categories';
import DynamicForm from 'components/dynamic-form/DynamicForm';
import GeneralAnalyze from 'components/general-analyze-table/GeneralAnalyze';
import { GeneralInfo } from 'components/general-info';
import { Layout } from 'components/layout';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div', { shouldForwardProp: (p) => p !== 'dataFetched' })`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.7s ease-in-out;
  padding-top: ${(props) => (props.dataFetched ? '0' : '30vh')};
`;
const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

function Dynamic() {
  return (
    <Layout>
      <Wrapper dataFetched={dynamicStore.analyzes || dynamicStore.listening}>
        <DynamicForm />
        {dynamicStore.analyzes && dynamicStore.categories && (
          <>
            <GeneralInfo analyzes={dynamicStore.filteredAnalyzes} />
            <Categories categories={dynamicStore.categories} />
            <GeneralAnalyze analyzes={dynamicStore.filteredAnalyzes} />
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

export default observer(Dynamic);
