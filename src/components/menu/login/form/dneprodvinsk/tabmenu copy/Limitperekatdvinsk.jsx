import React from "react"
//import './Menu.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const columns = [
    {
      field: 'title',
      headerName: 'Наименование рек и участков',
      width:330,
      editable: true,
    },
    {
      field: 'plan',
      headerName: 'Плановая глубина',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'data',
      headerName: 'Дата',
      type: 'data',
      width: 150,
      editable: true,
    },
    {
      field: 'limit',
      headerName: 'Лимитирующий перекат',
      width: 150,
      editable: true,
    },
    {
      field: 'glyb',
      headerName: 'Глубина',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'shirina',
      headerName: 'Ширина',
      type: 'number',
      width: 150,
      editable: true,
    },
  ];
  const rows= [
    { id: 1, title: 'р. Днепр', plan: null, data: null, limit: null, glyb: null, shirina: null},
    { id: 2, title: 'дер.Левки (воздушный переход) – Прудки III',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 3, title: 'Прудки III – Могилев (мостовой переход)',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23'},
    { id: 4, title: 'Могилев (мостовой переход) – прк. Стайки III',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 5, title: 'прк. Стайки III – Быхов', plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 6, title: 'Быхов – у.р. Друть',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 7, title: 'у.р. Друть – у.р. Березины',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 8, title: 'у.р. Березины – прк. Черное I',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 9, title: 'прк. Черное I – Речицкий ССРЗ',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 9, title: 'Речицкий ССРЗ – прк. Боровая I',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 9, title: 'прк. Боровая I – Подречицкое',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
    { id: 9, title: 'Подречицкое – 1082 км',  plan: 135, data: '23.04.2022', limit:'23', glyb: '43', shirina: '23' },
  ];

function Limitperekatdvinsk () {
    return ( <div >
       <div style={{ height: 630, width: '600%'}}>
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
    </div>
    )
    }
    
    export default Limitperekatdvinsk;