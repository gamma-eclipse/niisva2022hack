import { Button, FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { filtersStore } from 'app/store/filtersStore';
import { FilterSelect } from 'components/filter-select';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 15px;
`;

function Filters() {
  return (
    <Wrapper>
      <FilterSelect name="name" label="Название" />
      <FilterSelect name="purpose" label="Назначение" />
      <Button disabled={!filtersStore.changed} onClick={filtersStore.clear} variant="contained">
        Сбросить
      </Button>
    </Wrapper>
  );
}

export default observer(Filters);
