import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { toJS } from 'mobx';

export function CategoriesTable({ categories }) {
  // console.log(categories);
  return (
    <div>
      {Object.entries(categories).map(([categoryName, categoryData]) => {
        return (
          <Accordion key={categoryName}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{categoryName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Пакетов</TableCell>
                    <TableCell>Трафик</TableCell>
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
