import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { AnalyzeRow } from 'components/analyze-row';
import { TableCell, TableHeadCell } from 'shared/ui';

export function GeneralAnalyzeTable({ analyzeResults }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Кол-во пакетов</TableHeadCell>
          <TableHeadCell>Объем трафика</TableHeadCell>
          <TableHeadCell>Протокол</TableHeadCell>
          <TableHeadCell>Хост</TableHeadCell>
          <TableHeadCell>Адрес назначения</TableHeadCell>
          <TableHeadCell>Назначение</TableHeadCell>
          <TableHeadCell>Название</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {analyzeResults.length === 0 ? (
          <TableRow>
            <TableCell colSpan={20} style={{ color: 'gray' }}>
              Ничего не найдено
            </TableCell>
          </TableRow>
        ) : (
          analyzeResults.map((analyze) => <AnalyzeRow key={analyze.id} analyze={analyze} />)
        )}
      </TableBody>
    </Table>
  );
}
