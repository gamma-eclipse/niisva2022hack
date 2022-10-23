import { TableRow } from '@mui/material';
import { toJS } from 'mobx';
import React from 'react';
import { TableCell } from 'shared/ui';

export function AnalyzeRow({ analyze }) {
  return (
    <TableRow>
      {/* {analyze.map((v) => (
        <TableCell key={v}>{v}</TableCell>
      ))} */}
      <TableCell>{analyze.id}</TableCell>
      <TableCell>{analyze.traffic} байт</TableCell>
      <TableCell>{analyze.posix}</TableCell>
      <TableCell>{analyze.application}</TableCell>
      <TableCell>{analyze.isvpn}</TableCell>
      <TableCell>{analyze.predicted_category}</TableCell>
    </TableRow>
  );
}
