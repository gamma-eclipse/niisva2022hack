import { Button, Collapse, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import CategoriesTable from './CategoriesTable';

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

function Categories() {
  const [open, setOpen] = useState(true);

  return (
    <Wrapper>
      <Head>
        <Typography variant="h4">Категории</Typography>
        <Button variant="contained" onClick={() => setOpen(!open)}>
          {open ? 'Закрыть' : 'Открыть'}
        </Button>
      </Head>
      <Collapse in={open} timeout="auto">
        {analyzeStore.categories && <CategoriesTable categories={analyzeStore.categories} />}
      </Collapse>
    </Wrapper>
  );
}

export default observer(Categories);
