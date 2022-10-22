import { FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { filtersStore } from 'app/store/filtersStore';
import { observer } from 'mobx-react-lite';

const Wrapper = styled('div')`
  display: flex;
  gap: 15px;
  padding: 10px 0;
`;

function Filters() {
  console.log(filtersStore.applied);
  return (
    <Wrapper>
      <FormControl style={{ width: 150 }}>
        <InputLabel id="select_name">Название</InputLabel>
        <Select
          // variant="filled"
          labelId="select_name"
          value={filtersStore.applied.name}
          onChange={(e) => {
            filtersStore.applied.name = e.target.value;
          }}
          label="Название"
        >
          <MenuItem selected value="">
            Не выбрано
          </MenuItem>
          {filtersStore.options.name.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ width: 150 }}>
        <InputLabel id="select_purpose">Назначение</InputLabel>
        <Select
          labelId="select_purpose"
          value={filtersStore.applied.purpose}
          onChange={(e) => {
            filtersStore.applied.purpose = e.target.value;
          }}
          label="Назначение"
        >
          <MenuItem selected value="">
            Не выбрано
          </MenuItem>
          {filtersStore.options.purpose.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

export default observer(Filters);
