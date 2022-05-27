import React from "react"
//import './Menu.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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


function Gidropostbug () {
    return ( <div >
            <div>
            <Box sx={{ flexGrow: 1 }}>
           <p> река Днепр</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Могилев</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Жлобин</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Речица</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Лоев</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Березина</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Березино</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Бобруйск</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Светлогорск</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Сож</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Славгород</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Гомель</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
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
          <Typography>Пинск</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Коробье</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Черничи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Мозырь</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Горынь</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>ст Горынь</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Западная Двина</p> 
           <Grid container spacing={2}>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Сураж</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Витебск</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
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
          <Typography>Полоцк</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
           <p> река Неман</p> 
           <Grid container spacing={2}>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Гродно</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
          </p>
          <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
          <p></p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box>
      
    
    </div>
    </div>
    )
    }
    
    export default Gidropostbug;