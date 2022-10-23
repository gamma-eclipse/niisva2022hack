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
import 'chart.js/auto';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Doughnut } from 'react-chartjs-2';
import { TableCell, TableHeadCell } from 'shared/ui';

function CategoriesTable({ categories }) {
  return (
    <div>
      {Object.entries(categories).map(([categoryName, categoryData]) => {
        return (
          <Accordion key={categoryName}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{categoryName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div
                  style={{
                    width: 400,
                    height: 400,
                  }}
                >
                  <Doughnut
                    datasetIdKey="first_id"
                    data={{
                      labels: Object.keys(categoryData),
                      datasets: [
                        {
                          data: Object.values(categoryData).map((v) => v.packages),
                          backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(36, 252, 3)',
                            'rgb(252, 3, 36)',
                            'rgb(12, 195, 201)',
                            'rgb(250, 238, 7)',
                          ],
                        },
                      ],
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 400,
                    height: 400,
                  }}
                >
                  <Doughnut
                    datasetIdKey="first_id"
                    data={{
                      labels: Object.keys(categoryData),
                      datasets: [
                        {
                          data: Object.values(categoryData).map((v) => v.traffic),
                          backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(36, 252, 3)',
                            'rgb(252, 3, 36)',
                            'rgb(12, 195, 201)',
                          ],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
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
                        <TableCell> {itemData.traffic} байт</TableCell>
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
