import { TableRow } from '@mui/material';
import { toJS } from 'mobx';
import React from 'react';
import { TableCell } from 'shared/ui';

export function AnalyzeRow({ analyze }) {
  return (
    <TableRow>
      <TableCell>{analyze.id}</TableCell>
      <TableCell>{analyze.traffic} байт</TableCell>
      <TableCell>{analyze.posix}</TableCell>
      <TableCell>{analyze.source}</TableCell>
      <TableCell>{analyze.destination}</TableCell>
      <TableCell>{analyze.predicted_app}</TableCell>
      <TableCell>{analyze.predicted_category}</TableCell>
      <TableCell>{analyze.isvpn}</TableCell>
    </TableRow>
  );
}
