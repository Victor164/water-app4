import React, { useState } from 'react';
import './News.css';
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Material from '../material/Material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent } from '@mui/material';

function News () {
    return (<div >
       
               <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
               <Grid item xs>
               <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        История водного транспорта Беларуси «Крылатый речной флот»
        </Typography>
        <Typography variant="body2">
          30.06.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%B8/'>Подробнее</Button>
      </CardActions>
    </Card>
    <div></div>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        25 июня – День моряка
        </Typography>
        <Typography variant="body2">
          24.06.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/25-%d0%b8%d1%8e%d0%bd%d1%8f-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bc%d0%be%d1%80%d1%8f%d0%ba%d0%b0/'>Подробнее</Button>
      </CardActions>
    </Card>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        День всенародной памяти жертв Великой Отечественной войны и геноцида белорусского народа
        </Typography>
        <Typography variant="body2">
          22.06.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b4%d0%b5%d0%bd%d1%8c-%d0%b2%d1%81%d0%b5%d0%bd%d0%b0%d1%80%d0%be%d0%b4%d0%bd%d0%be%d0%b9-%d0%bf%d0%b0%d0%bc%d1%8f%d1%82%d0%b8-%d0%b6%d0%b5%d1%80%d1%82%d0%b2-%d0%b2%d0%b5%d0%bb%d0%b8%d0%ba%d0%be/'>Подробнее</Button>
      </CardActions>
    </Card>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        Заседание комиссии по противодействию коррупции
        </Typography>
        <Typography variant="body2">
          22.06.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b7%d0%b0%d1%81%d0%b5%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%b8%d1%81%d1%81%d0%b8%d0%b8-%d0%bf%d0%be-%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2/'>Подробнее</Button>
      </CardActions>
    </Card>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        Всемирный день без табака
        </Typography>
        <Typography variant="body2">
          15.06.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%b1%d0%b5%d0%b7-%d1%82%d0%b0%d0%b1%d0%b0%d0%ba%d0%b0/'>Подробнее</Button>
      </CardActions>
    </Card>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        Внесены изменения в схемы расстановки навигационных знаков на следующих участках внутренних водных путей
        </Typography>
        <Typography variant="body2">
          31.05.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b2%d0%bd%d0%b5%d1%81%d0%b5%d0%bd%d1%8b-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%b2-%d1%81%d1%85%d0%b5%d0%bc%d1%8b-%d1%80%d0%b0%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba/'>Подробнее</Button>
      </CardActions>
    </Card>
                </Grid>
              </Grid>
             </Box>
   </div>
    )
    }

    export default News;   
