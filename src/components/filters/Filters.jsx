import { FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { filtersStore } from 'app/store/filtersStore';
import { FilterSelect } from 'components/filter-select';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div')`
  display: flex;
  gap: 15px;
  padding: 10px 0;
`;

function Filters() {
  return (
    <Wrapper>
      <FilterSelect name="name" label="Название" />
      <FilterSelect name="purpose" label="Назначение" />
    </Wrapper>
  );
}

export default observer(Filters);
