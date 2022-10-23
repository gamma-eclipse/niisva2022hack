import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { AnalyzeRow } from 'components/analyze-row';
import { TableCell, TableHeadCell } from 'shared/ui';

export function GeneralAnalyzeTable({ analyzes }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {analyzeStore.HEADERS.map((v) => (
            <TableHeadCell key={v}>{v}</TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {analyzes.length === 0 ? (
          <TableRow>
            <TableCell colSpan={20} style={{ color: 'gray' }}>
              Ничего не найдено
            </TableCell>
          </TableRow>
        ) : (
          analyzes.map((analyze) => <AnalyzeRow key={analyze.id} analyze={analyze} />)
        )}
      </TableBody>
    </Table>
  );
}
