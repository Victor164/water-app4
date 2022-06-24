import React from "react"
//import './Menu.css';
import Button from '@mui/material/Button';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const columns = [
    {
      field: 'gyztitle',
      headerName: 'Наименование рек, каналов и гидроузлов',
      width:330,
      editable: true,
    },
    {
      field: 'levelgyzVB',
      headerName: 'Уровень воды над проектным горизонтом,ВБ см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'levelgyzNB',
      headerName: 'Уровень воды над проектным горизонтом,НБ см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'daylevelgyzVB',
      headerName: 'Изменение уровня за сутки, ВБ, см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'daylevelgyzNB',
      headerName: 'Изменение уровня за сутки, НБ, см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'textgyz',
      headerName: 'Примечание',
      width: 150,
      editable: true,
    }
  ];
  const rows= [
    { id: 1, gyztitle: 'р. Припять'},
    { id: 2, gyztitle: 'Судоходный г/у №12 Стахово',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 3, gyztitle: 'Судоходный г/у №11 Качановичи	',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 4, gyztitle: 'р. Пина'},
    { id: 5, gyztitle: 'Судоходный г/у №1 Дубой',levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null },
    { id: 6, gyztitle: 'ДБК'},
    { id: 7, gyztitle: 'Судоходный г/у №2 Переруб',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 8, gyztitle: 'Судоходный г/у №3 Рагодощ',   levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у №4 Овзичи',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у №5 Ляховичи', levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у Кобрин', levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null}
  ];

function Gidroyzli () {
    return (<div >
      <div style={{ height: 630, width: '430%'}}>
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
    // <div >
    //    <Box sx={{ flexGrow: 1 }}>
    //        <p> река Припять</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №12 Стахово</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №11 Качановичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //       <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Пина</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №1 Дубой</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>ДБК</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №2 Переруб</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №3 Рагодощ</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №4 Овзичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №5 Ляховичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у Кобрин</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Муховец</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №8 Залузье</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №9 Новосады</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №10 Тришин</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Брест плотина</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Западная Двина</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный шлюз Витебская ГЭС</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Неман</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Гродненская ГЭС</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>Августовский канал</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Белорусская часть г/у Кужинец</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у Волкушек</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у Домбровка</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у Немново</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    // </div>
    )
    }
    
    export default Gidroyzli;