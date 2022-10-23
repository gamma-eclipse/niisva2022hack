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
      <FilterSelect name="application" label="Приложение" />
      <FilterSelect name="isvpn" label="Впн" />
      <FilterSelect name="predicted_category" label="Назначение" />
      <Button disabled={!filtersStore.changed} onClick={filtersStore.clear} variant="contained">
        Сбросить
      </Button>
    </Wrapper>
  );
}

export default observer(Filters);
