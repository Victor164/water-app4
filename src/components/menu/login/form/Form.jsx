import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Button from '@mui/material/Button';


function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: false }} />
      </GridToolbarContainer>
    );
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Наименование рек и гидрологических постов',
    width:330,
    editable: true,
  },
  {
    field: 'level',
    headerName: 'Уровень воды,см',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'Прибыло / Убыло',
    type: 'number',
    width: 150,
    editable: true,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, title: 'р. Днепр', level: null, size: null },
  { id: 2, title: 'Могилёв', level: '123', size: 42 },
  { id: 3, title: 'Жлобин', level: '319', size: 45 },
  { id: 4, title: 'Речица', level: '357', size: 16 },
  { id: 5, title: 'Лоев', level: '476', size: null },
  { id: 6, title: 'р. Березина', level: null, size: null },
  { id: 7, title: 'Березино', level: null, size: null },
  { id: 8, title: 'Бобруйск', level: '128', size: 36 },
  { id: 9, title: 'Светлогорск', level: '538', size: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 610, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      <Button variant="contained">Сохранить</Button>
    </div>
  );
}