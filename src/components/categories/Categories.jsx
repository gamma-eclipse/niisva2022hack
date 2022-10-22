import { Button, Collapse, Typography, styled } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { Spoiler } from 'components/spoiler';
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
  return (
    <Spoiler title="Категории">
      {analyzeStore.categories && <CategoriesTable categories={analyzeStore.categories} />}
    </Spoiler>
  );
}

export default observer(Categories);
