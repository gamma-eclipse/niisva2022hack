import { Button, Collapse } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { CategoriesTable } from './CategoriesTable';

function Categories() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Анализ категорий
      </Button>
      <Collapse in={open} timeout="auto">
        {analyzeStore.categories && <CategoriesTable categories={analyzeStore.categories} />}
      </Collapse>
    </div>
  );
}

export default observer(Categories);
