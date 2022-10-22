import { TableCell, TableRow } from '@mui/material';
import React from 'react';

export function AnalyzeRow({ analyze }) {
  return (
    <TableRow>
      <TableCell align="center">{analyze.id}</TableCell>
      <TableCell align="center">{analyze.packages}</TableCell>
      <TableCell align="center">{analyze.traffic}</TableCell>
      <TableCell align="center">{analyze.protocol}</TableCell>
      <TableCell align="center">{analyze.host}</TableCell>
      <TableCell align="center">{analyze.target}</TableCell>
      <TableCell align="center">{analyze.classification.purpose}</TableCell>
      <TableCell align="center">{analyze.classification.name}</TableCell>
    </TableRow>
  );
}
