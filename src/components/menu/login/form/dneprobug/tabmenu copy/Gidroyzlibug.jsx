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
      field: 'levelgyz',
      headerName: 'Уровень воды над проектным горизонтом, см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'daylevelgyz',
      headerName: 'Изменение уровня за сутки, см',
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
    { id: 1, gyztitle: 'р. Припять', levelgyz: null, daylevelgyz: null, textgyz: null},
    { id: 2, gyztitle: 'Судоходный г/у №12 Стахово',  levelgyz: '324', daylevelgyz: '534', textgyz:  null},
    { id: 3, gyztitle: 'Судоходный г/у №11 Качановичи	',  levelgyz: '324', daylevelgyz: '534', textgyz: null},
    { id: 4, gyztitle: 'р. Пина',  levelgyz: null, daylevelgyz: null, textgyz: null },
    { id: 5, gyztitle: 'Судоходный г/у №1 Дубой', levelgyz: '324', daylevelgyz: '534', },
    { id: 6, gyztitle: 'ДБК',  levelgyz: null, daylevelgyz: null, textgyz: null},
    { id: 7, gyztitle: 'Судоходный г/у №2 Переруб',  levelgyz: '324', daylevelgyz: '534',},
    { id: 8, gyztitle: 'Судоходный г/у №3 Рагодощ',   levelgyz: '324', daylevelgyz: '534',},
    { id: 9, gyztitle: 'Судоходный г/у №4 Овзичи',  levelgyz: '324', daylevelgyz: '534',},
    { id: 9, gyztitle: 'Судоходный г/у №5 Ляховичи', levelgyz: '324', daylevelgyz: '534',},
    { id: 9, gyztitle: 'Судоходный г/у Кобрин', levelgyz: '324', daylevelgyz: '534',}
  ];

function Gidroyzlibug () {
    return ( <div >
       <Box sx={{ flexGrow: 1 }}>
           <p> река Припять</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №12 Стахово</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №11 Качановичи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Пина</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №1 Дубой</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p>ДБК</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №2 Переруб</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №3 Рагодощ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №4 Овзичи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №5 Ляховичи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у Кобрин</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p>река Муховец</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №8 Залузье</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №9 Новосады</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у №10 Тришин</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Брест плотина</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p>река Западная Двина</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный шлюз Витебская ГЭС</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p>река Неман</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Гродненская ГЭС</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p>Августовский канал</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Белорусская часть г/у Кужинец</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у Волкушек</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у Домбровка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Судоходный г/у Немново</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
          <p></p>
          <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
    </div>
    )
    }
    
    export default Gidroyzlibug;