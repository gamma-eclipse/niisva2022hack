import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { filtersStore } from 'app/store/filtersStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

function FilterSelect({ name, label, width = 180 }) {
  return (
    <FormControl style={{ width }}>
      <InputLabel id={`select_${name}`}>{label}</InputLabel>
      <Select
        labelId={`select_${name}`}
        value={filtersStore.applied[name]}
        onChange={(e) => {
          filtersStore.applied[name] = e.target.value;
        }}
        label={label}
      >
        <MenuItem selected value="">
          Не выбрано
        </MenuItem>
        {filtersStore.options[name].map((v) => (
          <MenuItem key={v} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default observer(FilterSelect);
