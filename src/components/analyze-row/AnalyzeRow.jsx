import { TableRow } from '@mui/material';
import React from 'react';
import { TableCell } from 'shared/ui';

export function AnalyzeRow({ analyze }) {
  return (
    <TableRow>
      <TableCell>{analyze.id}</TableCell>
      <TableCell>{analyze.packages}</TableCell>
      <TableCell>{analyze.traffic}</TableCell>
      <TableCell>{analyze.protocol}</TableCell>
      <TableCell>{analyze.host}</TableCell>
      <TableCell>{analyze.target}</TableCell>
      <TableCell>{analyze.classification.purpose}</TableCell>
      <TableCell>{analyze.classification.name}</TableCell>
    </TableRow>
  );
}
