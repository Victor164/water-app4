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
      field: 'mtitle',
      headerName: 'Наименование мостов',
      width:330,
      editable: true,
    },
    {
      field: 'levelm',
      headerName: 'Текущая высота пролета, м',
      type: 'number',
      width: 250,
      editable: true,
    }
  ];
  const rows= [
    { id: 1, mtitle: 'Речицкий ж/д мост ', levelm: '324'},
    { id: 2, mtitle: 'Отверницкий (старый) а/д мост',  levelm: '324'},
    { id: 3, mtitle: 'Отверницкий (новый) а/д мост ',  levelm: '324'},
    { id: 4, mtitle: 'Могилев а/д мост',  levelm: '324'},
    { id: 5, mtitle: 'Быхов а/д мост', levelm: '324'},
    { id: 6, mtitle: 'Рогачев а/д мост',  levelm: '324'},
    { id: 7, mtitle: 'Жлобин а/д мост',  levelm: '324'},
    { id: 8, mtitle: 'Жлобин ж/д мост',   levelm: '324'},
    { id: 9, mtitle: 'Жлобин новый ж/д мост',  levelm: '324'}
  ];

function Mostybug () {
    return ( <div >
            <Box sx={{ flexGrow: 1 }}>
           <p>река Днепр</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Речицкий ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Отверницкий (старый) а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>'Отверницкий (новый) а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Могилев а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Быхов а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Рогачев а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Жлобин а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Жлобин ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
          <Typography>Жлобин новый ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
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
    
    export default Mostybug;