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
import { analyzeStore } from 'app/store/analyzeStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

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
                    <TableCell align="center">Название</TableCell>
                    <TableCell align="center">Кол-во пакетов</TableCell>
                    <TableCell align="center">Объем трафика</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(categoryData).map(([itemName, itemData]) => {
                    return (
                      <TableRow key={Math.random()}>
                        <TableCell align="center">{itemName}</TableCell>
                        <TableCell align="center"> {itemData.packages}</TableCell>
                        <TableCell align="center"> {itemData.traffic}</TableCell>
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
