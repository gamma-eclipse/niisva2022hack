import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { analyzeStore } from 'app/store/analyzeStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TableCell, TableHeadCell } from 'shared/ui';

function CategoriesTable({ categories }) {
  return (
    <div>
      {Object.entries(categories).map(([categoryName, categoryData]) => {
        return (
          <Accordion key={categoryName}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{analyzeStore.CATEGORY_NAMES_MAP[categoryName]}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Название</TableHeadCell>
                    <TableHeadCell>Кол-во пакетов</TableHeadCell>
                    <TableHeadCell>Объем трафика</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(categoryData).map(([itemName, itemData]) => {
                    return (
                      <TableRow key={Math.random()}>
                        <TableCell>{itemName}</TableCell>
                        <TableCell> {itemData.packages}</TableCell>
                        <TableCell> {itemData.traffic}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default observer(CategoriesTable);
