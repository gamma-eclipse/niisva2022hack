import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { AnalyzeRow } from 'components/analyze-row';

export function GeneralAnalyzeTable({ analyzeResults }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">ID</TableCell>
          <TableCell align="center">Кол-во пакетов</TableCell>
          <TableCell align="center">Объем трафика</TableCell>
          <TableCell align="center">Протокол</TableCell>
          <TableCell align="center">Хост</TableCell>
          <TableCell align="center">Адрес назначения</TableCell>
          <TableCell align="center">Назначение</TableCell>
          <TableCell align="center">Название</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {analyzeResults.map((analyze) => (
          <AnalyzeRow key={analyze.id} analyze={analyze} />
        ))}
      </TableBody>
    </Table>
  );
}
