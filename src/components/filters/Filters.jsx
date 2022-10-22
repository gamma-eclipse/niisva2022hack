import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { filtersStore } from 'app/store/filtersStore';
import { observer } from 'mobx-react-lite';

function Filters() {
  console.log(filtersStore.applied);
  return (
    <div>
      <FormControl style={{ width: 150 }}>
        <InputLabel id="select_name">Название</InputLabel>
        <Select
          labelId="select_name"
          value={filtersStore.applied.name}
          onChange={(e) => {
            filtersStore.applied.name = e.target.value;
          }}
        >
          <MenuItem selected value="">
            None
          </MenuItem>
          {filtersStore.options.name.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default observer(Filters);
