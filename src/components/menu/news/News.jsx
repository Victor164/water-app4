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
import { Button, Card, CardActionArea, CardActions, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

function News () {
    return (<div >
       
               <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
               <Grid item xs>
                <div>
                <h3>Новости</h3>
                </div>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%bf%d1%80%d0%be%d0%ba%d1%83%d1%80%d0%b0%d1%82%d1%83%d1%80%d0%be%d0%b9-%d1%81%d0%be%d0%b2%d0%b5%d1%82%d1%81%d0%ba%d0%be%d0%b3%d0%be-%d1%80%d0%b0%d0%b9%d0%be%d0%bd%d0%b0-%d0%b3-%d0%bc%d0%b8%d0%bd-2/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Прокуратурой Советского района г. Минска проведено профилактическое мероприятие с работниками учреждения
        </Typography>
        <Typography variant="body2">
          14.12.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%bf%d1%80%d0%be%d0%ba%d1%83%d1%80%d0%b0%d1%82%d1%83%d1%80%d0%be%d0%b9-%d1%81%d0%be%d0%b2%d0%b5%d1%82%d1%81%d0%ba%d0%be%d0%b3%d0%be-%d1%80%d0%b0%d0%b9%d0%be%d0%bd%d0%b0-%d0%b3-%d0%bc%d0%b8%d0%bd-2/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
        </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%b7%d0%b0%d1%81%d0%b5%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%b8%d1%81%d1%81%d0%b8%d0%b8-%d0%bf%d0%be-%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2-2/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Заседание комиссии по противодействию коррупции
        </Typography>
        <Typography variant="body2">
          13.12.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b7%d0%b0%d1%81%d0%b5%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%b8%d1%81%d1%81%d0%b8%d0%b8-%d0%bf%d0%be-%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2-2/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
        </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bd%d0%b5%d0%ba%d1%83%d1%80%d0%b5%d0%bd%d0%b8%d1%8f-%d0%bf%d1%80%d0%be%d1%84%d0%b8%d0%bb%d0%b0%d0%ba%d1%82%d0%b8/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Всемирный день некурения. Профилактика онкологических заболеваний
        </Typography>
        <Typography variant="body2">
          18.11.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bd%d0%b5%d0%ba%d1%83%d1%80%d0%b5%d0%bd%d0%b8%d1%8f-%d0%bf%d1%80%d0%be%d1%84%d0%b8%d0%bb%d0%b0%d0%ba%d1%82%d0%b8/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
        </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%bc%d0%b8%d0%bd%d1%82%d1%80%d0%b0%d0%bd%d1%81-%d1%81%d0%ba%d0%be%d1%80%d1%80%d0%b5%d0%ba%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bb-%d0%bf%d0%be%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Минтранс скорректировал постановления по вопросам передвижения по внутренним водным путям Беларуси
        </Typography>
        <Typography variant="body2">
          18.11.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%bc%d0%b8%d0%bd%d1%82%d1%80%d0%b0%d0%bd%d1%81-%d1%81%d0%ba%d0%be%d1%80%d1%80%d0%b5%d0%ba%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bb-%d0%bf%d0%be%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
        </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d1%81%d1%83%d0%b4%d0%be%d0%b2-%d0%b2-%d0%b3%d0%be%d1%81%d1%83%d0%b4%d0%b0%d1%80%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%be%d0%bc/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Регистрация судов в Государственном судовом реестре Республики Беларусь
        </Typography>
        <Typography variant="body2">
          17.11.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d1%81%d1%83%d0%b4%d0%be%d0%b2-%d0%b2-%d0%b3%d0%be%d1%81%d1%83%d0%b4%d0%b0%d1%80%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%be%d0%bc/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
    </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bc%d0%be%d1%80%d1%8f-2022/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Всемирный день моря 2022
        </Typography>
        <Typography variant="body2">
          30.09.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bc%d0%be%d1%80%d1%8f-2022/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
    </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%be-%d0%bf%d1%80%d0%be%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b8-%d0%bd%d0%b5%d0%b4%d0%b5%d0%bb%d0%b8-%d0%bd%d1%83%d0%bb%d0%b5%d0%b2%d0%be%d0%b3%d0%be-%d1%82%d1%80%d0%b0%d0%b2%d0%bc%d0%b0%d1%82/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        О проведении Недели нулевого травматизма
        </Typography>
        <Typography variant="body2">
          19.07.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%be-%d0%bf%d1%80%d0%be%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b8-%d0%bd%d0%b5%d0%b4%d0%b5%d0%bb%d0%b8-%d0%bd%d1%83%d0%bb%d0%b5%d0%b2%d0%be%d0%b3%d0%be-%d1%82%d1%80%d0%b0%d0%b2%d0%bc%d0%b0%d1%82/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
    </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d1%88%d1%82%d0%be%d1%80%d0%bc%d0%be%d0%b2%d0%be%d0%b5-%d0%b3%d0%b8%d0%b4%d1%80%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b5-%d0%bf%d1%80%d0%b5%d0%b4%d1%83%d0%bf%d1%80%d0%b5%d0%b6/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        
        <Typography variant="h5" component="div">
        Штормовое гидрологическое предупреждение об опасном явлении
        </Typography>
        <Typography variant="body2">
          08.07.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d1%88%d1%82%d0%be%d1%80%d0%bc%d0%be%d0%b2%d0%be%d0%b5-%d0%b3%d0%b8%d0%b4%d1%80%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b5-%d0%bf%d1%80%d0%b5%d0%b4%d1%83%d0%bf%d1%80%d0%b5%d0%b6/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
    </Card>
                <Card >
               <CardActionArea href='https://gawt.by/novosti/%d0%bf%d0%be%d0%b7%d0%b4%d1%80%d0%b0%d0%b2%d0%bb%d1%8f%d0%b5%d0%bc-%d1%81-%d0%b4%d0%bd%d0%b5%d0%bc-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%bd%d0%b8%d0%ba%d0%be%d0%b2-%d0%b2%d0%be%d0%b4%d0%bd%d0%be%d0%b3/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
      <CardContent>
        <Typography variant="h5" component="div">
        Поздравляем с Днем работников водного транспорта!
        </Typography>
        <Typography variant="body2">
          01.07.2022
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://gawt.by/novosti/%d0%bf%d0%be%d0%b7%d0%b4%d1%80%d0%b0%d0%b2%d0%bb%d1%8f%d0%b5%d0%bc-%d1%81-%d0%b4%d0%bd%d0%b5%d0%bc-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%bd%d0%b8%d0%ba%d0%be%d0%b2-%d0%b2%d0%be%d0%b4%d0%bd%d0%be%d0%b3/'>Подробнее</Button>
      </CardActions>
      </CardActionArea>
    </Card>
               <Card >
               <CardActionArea href='https://gawt.by/%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%B8/'>
               {/* <CardMedia
              component="img"
              height="250"
              image="/images/char3.jpg"/> */}
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
      </CardActionArea>
    </Card>
    <div></div>
    <Card >
        <CardActionArea href='https://gawt.by/novosti/25-%d0%b8%d1%8e%d0%bd%d1%8f-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%bc%d0%be%d1%80%d1%8f%d0%ba%d0%b0/'>
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
      </CardActionArea>
    </Card>
    <Card >
    <CardActionArea href='https://gawt.by/novosti/%d0%b4%d0%b5%d0%bd%d1%8c-%d0%b2%d1%81%d0%b5%d0%bd%d0%b0%d1%80%d0%be%d0%b4%d0%bd%d0%be%d0%b9-%d0%bf%d0%b0%d0%bc%d1%8f%d1%82%d0%b8-%d0%b6%d0%b5%d1%80%d1%82%d0%b2-%d0%b2%d0%b5%d0%bb%d0%b8%d0%ba%d0%be/'>
      <CardContent >
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
    </CardActionArea>
    </Card>
    <Card >
    <CardActionArea href='https://gawt.by/novosti/%d0%b7%d0%b0%d1%81%d0%b5%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%b8%d1%81%d1%81%d0%b8%d0%b8-%d0%bf%d0%be-%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2/'> 
      <CardContent >
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
      </CardActionArea> 
    </Card>
    <Card >
    <CardActionArea href='https://gawt.by/novosti/%d0%b2%d1%81%d0%b5%d0%bc%d0%b8%d1%80%d0%bd%d1%8b%d0%b9-%d0%b4%d0%b5%d0%bd%d1%8c-%d0%b1%d0%b5%d0%b7-%d1%82%d0%b0%d0%b1%d0%b0%d0%ba%d0%b0/'> 
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
      </CardActionArea> 
    </Card>
    <Card >
    <CardActionArea href='https://gawt.by/novosti/%d0%b2%d0%bd%d0%b5%d1%81%d0%b5%d0%bd%d1%8b-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d1%8f-%d0%b2-%d1%81%d1%85%d0%b5%d0%bc%d1%8b-%d1%80%d0%b0%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba/'> 
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
      </CardActionArea> 
    </Card>
                </Grid>
              </Grid>
             </Box>
   </div>
    )
    }

    export default News;   
