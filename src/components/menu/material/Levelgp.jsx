import React from "react"
import './Levelgp.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup , Collapse } from "@mui/material";
import Paper from '@mui/material/Paper';
import { db }from '../login/form/tabmenu/yved/init-firebase';
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { levelColl, waterColl } from '../login/form/tabmenu/yved/firestore-collections';
import Tablerealtime from "../table/Tablerealtime";
import Tablerealtime2 from "../table/Tablerealtime2";
import Tablerealtimegirdopost1 from "../table/Tablerealtimegirdopost1";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography'
import InfoMogilev from "./level/infogp/InfoMogilev";
import InfoZlobin from "./level/infogp/InfoZlobin";
import InfoRechitsa from "./level/infogp/InfoRechitsa";
import InfoLoev from "./level/infogp/InfoLoev";
import InfoBerezino from "./level/infogp/InfoBerezino";
import InfoBobrysk from "./level/infogp/InfoBobrysk";
import InfoSlavgorod from "./level/infogp/InfoSlavgorod";
import InfoSvetlogorsk from "./level/infogp/InfoGomel";
import InfoGomel from "./level/infogp/InfoGomel";
import InfoPinsk from "./level/infogp/InfoPinsk";
import InfoKorobe from "./level/infogp/InfoKorobe";
import InfoChernichi from "./level/infogp/InfoChernichi";
import InfoMozyr from "./level/infogp/InfoMozyr";
import InfoGoryn from "./level/infogp/InfoGoryn";
import InfoSyrazh from "./level/infogp/InfoSyrazh";
import InfoVitebsk from "./level/infogp/InfoVitebsk";
import InfoPolotsk from "./level/infogp/InfoPolotsk";
import InfoGrodno from "./level/infogp/InfoGrodno";
import Popup from "./level/popupgp/Popup";
import PopupZLob from "./level/popupgp/PopupZLob";
import { AutoSizer } from 'react-virtualized';
import PopupRechitsa from "./level/popupgp/PopupRechitsa";
import PopupLoev from "./level/popupgp/PopupLoev";
import PopupBobryusk from "./level/popupgp/PopupBobryusk";
import PopupSlavgorod from "./level/popupgp/PopupSlavgorod";
import PopupSvetlogorsk from "./level/popupgp/PopupSvetlogorsk";
import PopupGomel from "./level/popupgp/PopupGomel";
import PopupPinsk from "./level/popupgp/PopupPinsk";
import PopupKorobe from "./level/popupgp/PopupKorobe";
import PopupChernichi from "./level/popupgp/PopupChernichi";
import PopupMozyr from "./level/popupgp/PopupMozyr";
import PopupGoryn from "./level/popupgp/PopupGoryn";
import PopupVitebsk from "./level/popupgp/PopupVitebsk";
import PopupGrodno from "./level/popupgp/PopupGrodno";
import Popup1 from "./level/popupgp/Popup1";
import Popup1Zlobin from "./level/popupgp/Popup1Zlobin";
import Popup1Rechitsa from "./level/popupgp/Popup1Rechitsa";
import Popup1Loev from "./level/popupgp/Popup1Loev";
import Popup1Berezino from "./level/popupgp/Popup1Berezino";
import Popup1Bobryus from "./level/popupgp/Popup1Bobryus";
import Popup1Slavgorod from "./level/popupgp/Popup1Slavgorod";
import Popup1Svetlogorsk from "./level/popupgp/Popup1Svetlogorsk";
import Popup1Gomel from "./level/popupgp/Popup1Gomel";
import Popup1Pinsk from "./level/popupgp/Popup1Pinsk";
import Popup1Korobe from "./level/popupgp/Popup1Korobe";
import Popup1Chernichi from "./level/popupgp/Popup1Chernichi";
import Popup1Mozyr from "./level/popupgp/Popup1Mozyr";
import Popup1Goryn from "./level/popupgp/Popup1Goryn";
import Popup1Syraz from "./level/popupgp/Popup1Syraz";
import Popup1Vitebsk from "./level/popupgp/Popup1Vitebsk";
import Popup1Poplotsk from "./level/popupgp/Popup1Poplotsk";
import Popup1Grodno from "./level/popupgp/Popup1Grodno";

function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter />
      </Box>
    );
  }

  const columns = [
    {
      field: 'nameg',
      headerName: 'Наименование ',
      width: 250,
    },
    {
      field: 'yearg',
      headerName: 'Год ввода в эксплуатацию',
      width: 150,
    },
    {
      field: 'riverg',
      headerName: 'Река (канал)',
      width: 150,
    },
    {
      field: 'powerg',
      headerName: 'Установленная мощность, МВт',
      width: 200
    },
    {
      field: 'sobg',
      headerName: 'Собственник',
      width: 200,
      align:"center"
    }
  ];
  // const rows= [
  //   { id: 1, nameg: 'Витебская ГЭС',  yearg: '2016-2017', riverg: 'река Западная Двина', powerg: '40', sobg: 'Белэнерго'},
  //   { id: 2, nameg: 'Полоцкая ГЭС',  yearg: '2017', riverg: 'река Западная Двина', powerg: '21,6', sobg: 'Белэнерго'},
  //   { id: 3, nameg: 'Гродненская ГЭС',  yearg: '2012', riverg: 'река Неман', powerg: '17', sobg: 'Белэнерго'},
  //   { id: 4, nameg: 'ГЭС Немново',  yearg: '2004', riverg: 'Августовский канал', powerg: '0,1', sobg: 'Белэнерго'},
  //   { id: 5, nameg: 'ГЭС Новосады',  yearg: '2013', riverg: 'река Муховец', powerg: '0,3', sobg: 'Днепробугводпуть'},
  //   { id: 6, nameg: 'ГЭС Залузье',  yearg: '2011', riverg: 'река Муховец', powerg: '0,18', sobg: 'Днепробугводпуть'},
  //   { id: 8, nameg: 'ГЭС Дубой',  yearg: '2008', riverg: 'река Пин', powerg: '0,11', sobg: 'Днепробугводпуть'},
  //   { id: 9, nameg: 'ГЭС Стахово',  yearg: '2015', riverg: 'река Припять', powerg: ' 0,63', sobg: 'Днепробугводпуть'},
  //   { id: 10, nameg: 'ГЭС в Дроздах',  yearg: '2008', riverg: 'река Свислоч', powerg: '0,3', sobg: 'РУП "Минскводоканал"'}
  // ]
  const geses = [
    {
      data: { content: 'Могилев' },
      options: { selectOnClick: false },
      coords: [53.894548, 30.330654],
    }
  ];
  const geses1 = [
    {
      data: { content: 'Жлобин' },
      options: { selectOnClick: false },
      coords: [52.892256, 30.037822]
    }
  ];
  const geses2 = [
    {
      data: { content: 'Речица' },
      options: { selectOnClick: false },
      coords: [52.371556, 30.386566],
    }
  ];
  const geses3 = [
    {
      data: { content: 'Лоев' },
      options: { selectOnClick: false },
      coords: [51.967399, 30.797994],
    }
  ];
  const geses4 = [
    {
      data: { content: 'Березино' },
      options: { selectOnClick: false },
      coords: [ 53.834601, 28.994249],
    }
  ];
  const geses5 = [
    {
      data: { content: 'Бобруйск' },
      options: { selectOnClick: false },
      coords: [53.145597, 29.225538],
    }
  ];
  const geses6 = [
    {
      data: { content: 'Светлогорск' },
      options: { selectOnClick: false },
      coords: [52.633056, 29.7484835],
    }
  ];
  const geses7 = [
    {
      data: { content: 'Славгород' },
      options: { selectOnClick: false },
      coords: [53.446019, 31.004526 ],
    }
  ];
  const geses8 = [
    {
      data: { content: 'Гомель' },
      options: { selectOnClick: false },
      coords: [52.424160, 31.0142812],
    }
  ];
  const geses9 = [
    {
      data: { content: 'Пинск' },
      options: { selectOnClick: false },
      coords: [52.111406, 26.102473 ],
    }
  ];
  const geses10 = [
    {
      data: { content: 'Коробье' },
      options: { selectOnClick: false },
      coords: [52.139560, 26.801964],
    }
  ];
  const geses11 = [
    {
      data: { content: 'Черничи' },
      options: { selectOnClick: false },
      coords: [ 52.063605, 27.820079],
    }
  ];
  const geses12 = [
    {
      data: { content: 'Мозырь' },
      options: { selectOnClick: false },
      coords: [52.049019, 29.267301],
    }
  ];
  const geses13 = [
    {
      data: { content: 'ст Горынь' },
      options: { selectOnClick: false },
      coords: [51.852052, 26.783764],
    }
  ];
  const geses14 = [
    {
      data: { content: 'Сураж' },
      options: { selectOnClick: false },
      coords: [54.046925, 25.584657 ],
    }
  ];
  const geses15 = [
    {
      data: { content: 'Витебск' },
      options: { selectOnClick: false },
      coords: [55.184217, 30.202878],
    }
  ];  
  const geses16 = [
    {
      data: { content: 'Полоцк' },
      options: { selectOnClick: false },
      coords: [55.485576, 28.768349 ],
    }
  ];  
  const geses17 = [
    {
      data: { content: 'Гродно' },
      options: { selectOnClick: false },
      coords: [53.677839, 23.829529],
    }
  ];
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
  // function Tablerealtimegirdopost1 () {
  //   const [level, setLevel] = useState([])
  //   useEffect(()=>{
  //    const ubsub = onSnapshot(levelColl, snapshot =>{
  //     setLevel(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
  //    })
  
  //   return ()=>{
      
  //     ubsub()
  
  //   }
    
  //   },[])
  //   useEffect(()=>{
  //     console.log(level)
  //  },[level])
  // }
 function New(){
  const [open, setOpen] = React.useState(false);
 }
  class Levelgp extends React.Component{
// function Ges () {
    state = mapState;
    onItemClick = coords => {
      this.setState({ center: coords, zoom: 15 });
    };

    render (){
return ( <div  className="grid-container11">
    <div className="g1" style={{ height: 670, width: '100%'}}>
    <TableContainer component={Paper}>
   
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="center"><b>Наименование гидрологических постов</b></TableCell>
            <TableCell align="center"><b>"0" поста, мБС</b></TableCell>
            <TableCell align="center"><b>ПГ над "0" поста, см</b></TableCell>
            <TableCell align="center"><b>На карте</b></TableCell>
            <TableCell align="center"><b>Показать график</b></TableCell>
            <TableCell align="center"><b>Дополнительная информация</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
           
              <TableCell align="center">г/п р. Днепр - Могилёв</TableCell>
              <TableCell align="center">139,5</TableCell>
              <TableCell align="center">110</TableCell>
              
              <TableCell align="center"> {geses.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><Popup/></TableCell>
             <TableCell align="center"><Popup1/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Днепр - Жлобин</TableCell>
              <TableCell align="center">123,77</TableCell>
              <TableCell align="center">112</TableCell>
              <TableCell align="center"> {geses1.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupZLob/></TableCell>
             <TableCell align="center"><Popup1Zlobin/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Днепр - Речица</TableCell>
              <TableCell align="center">115,27</TableCell>
              <TableCell align="center">80</TableCell>
              <TableCell align="center"> {geses2.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupRechitsa/></TableCell>
             <TableCell align="center"><Popup1Rechitsa/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Днепр - Лоев</TableCell>
              <TableCell align="center">109,03</TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center"> {geses3.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupLoev/></TableCell>
             <TableCell align="center"><Popup1Loev/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Березина - Березино</TableCell>
              <TableCell align="center">143,49</TableCell>
              <TableCell align="center"> - </TableCell>
              <TableCell align="center"> {geses4.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"> - </TableCell>
             <TableCell align="center"><Popup1Berezino/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Березина - Бобруйск</TableCell>
              <TableCell align="center">132,47</TableCell>
              <TableCell align="center">30</TableCell>
              <TableCell align="center"> {geses5.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupBobryusk/></TableCell>
             <TableCell align="center"><Popup1Bobryus/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Сож - Славгород</TableCell>
              <TableCell align="center">128,19</TableCell>
              <TableCell align="center">40</TableCell>
              <TableCell align="center"> {geses7.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupSlavgorod/></TableCell>
             <TableCell align="center"><Popup1Slavgorod/></TableCell>
            </TableRow>
           
          <TableRow
            >
              <TableCell align="center">г/п р. Березина - Светлогорск</TableCell>
              <TableCell align="center">124,37</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center"> {geses6.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupSvetlogorsk/></TableCell>
             <TableCell align="center"><Popup1Svetlogorsk/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Сож - Гомель</TableCell>
              <TableCell align="center">115,11</TableCell>
              <TableCell align="center">120</TableCell>
              <TableCell align="center"> {geses8.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupGomel/></TableCell>
             <TableCell align="center"><Popup1Gomel/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Припять - Пинск</TableCell>
              <TableCell align="center">133,56</TableCell>
              <TableCell align="center">127</TableCell>
              <TableCell align="center"> {geses9.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupPinsk/></TableCell>
             <TableCell align="center"><Popup1Pinsk/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Припять - Коробье</TableCell>
              <TableCell align="center">128,28</TableCell>
              <TableCell align="center">140</TableCell>
              <TableCell align="center"> {geses10.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupKorobe/></TableCell>
             <TableCell align="center"><Popup1Korobe/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Припять - Черничи</TableCell>
              <TableCell align="center">121,28</TableCell>
              <TableCell align="center">205</TableCell>
              <TableCell align="center"> {geses11.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupChernichi/></TableCell>
             <TableCell align="center"><Popup1Chernichi/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Припять - Мозырь</TableCell>
              <TableCell align="center">111,73</TableCell>
              <TableCell align="center">80</TableCell>
              <TableCell align="center"> {geses12.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupMozyr/></TableCell>
             <TableCell align="center"><Popup1Mozyr/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Горынь - ст. Горынь</TableCell>
              <TableCell align="center">129,67</TableCell>
              <TableCell align="center">220</TableCell>
              <TableCell align="center"> {geses13.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupGoryn/></TableCell>
             <TableCell align="center"><Popup1Goryn/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Зап.Двина - Сураж</TableCell>
              <TableCell align="center">135,96</TableCell>
              <TableCell align="center">60</TableCell>
              <TableCell align="center"> {geses14.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"> - </TableCell>
             <TableCell align="center"><Popup1Syraz/></TableCell>
            </TableRow>
            <TableRow
            >

              <TableCell align="center">г/п р. Зап.Двина - Витебск</TableCell>
              <TableCell align="center">124,43</TableCell>
              <TableCell align="center">71</TableCell>
              <TableCell align="center"> {geses15.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupVitebsk/></TableCell>
             <TableCell align="center"><Popup1Vitebsk/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Зап.Двина - Полоцк</TableCell>
              <TableCell align="center">150</TableCell>
              <TableCell align="center">106,14</TableCell>
              <TableCell align="center"> {geses16.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"> - </TableCell>
             <TableCell align="center"><Popup1Poplotsk/></TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">г/п р. Неман - Гродно</TableCell>
              <TableCell align="center">92,01</TableCell>
              <TableCell align="center">70</TableCell>
              <TableCell align="center"> {geses17.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
             <TableCell align="center"><PopupGrodno/></TableCell>
             <TableCell align="center"><Popup1Grodno/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
  
    </TableContainer>
      </div>
     
      <div className="g2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='650px'  state={this.state}>
        <SearchControl options={{
        float: 'right'
         }}  />
          {/* {level.map(wat =>( */}
          <Tablerealtime2/>
          
         {/* <Placemark geometry={[53.894548, 30.330654]} properties={{balloonContentBody: [
          '<strong>гидропост Могилева </strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} /> */}
   
                    {/* ))} */}
      <Placemark geometry={[52.892256, 30.037822]} 
           properties={{
            balloonContentHeader: "гидропост Жлобина",
            balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
        }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
                    <Placemark geometry={[52.371556, 30.386566]} 
             properties={{
              balloonContentHeader: "гидропост Речицы",
              balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
             }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
                     <Placemark geometry={[51.967399, 30.797994]} 
                 properties={{
                  balloonContentHeader: "гидропост Лоева",
                  balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
                 }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
           <Placemark geometry={[ 53.834601, 28.994249]} 
              properties={{
                balloonContentHeader: "гидропост Березины",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
           <Placemark geometry={[53.145597, 29.225538]} 
              properties={{
                balloonContentHeader: "гидропост Бобруйска",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
          <Placemark geometry={[ 52.633056, 29.748483]}  properties={{
                balloonContentHeader: "гидропост Светлогорска",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[ 53.446019, 31.004526]}  properties={{
                balloonContentHeader: "гидропост Славгорода",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[ 52.424160, 31.014281]}  properties={{
                balloonContentHeader: "гидропост Гомеля",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
             <Placemark geometry={[ 52.111406, 26.102473]} properties={{
                balloonContentHeader: "гидропост Пинска",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
         <Placemark geometry={[ 52.139560, 26.801964]}  properties={{
                balloonContentHeader: "гидропост Коробье",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[ 52.063605, 27.820079]}  properties={{
                balloonContentHeader: "гидропост Черничи",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[ 52.049019, 29.267301]}  properties={{
                balloonContentHeader: "гидропост Мозыря",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
            <Placemark geometry={[  51.852052, 26.783764]}  properties={{
                balloonContentHeader: "гидропост станции Горынь",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[54.046925, 25.584657]}  properties={{
                balloonContentHeader: "гидропост Суража",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
            <Placemark geometry={[55.184217, 30.202878]}  properties={{
                balloonContentHeader: "гидропост Витебска",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[55.485576, 28.768349]}  properties={{
                balloonContentHeader: "гидропост Полоцка",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[53.677839, 23.829529]}  properties={{
                balloonContentHeader: "гидропост Гродно",
                balloonContent:[ 'уровень воды над 0 граф: <br></br> уровень воды над ПГ:<br></br>' ]
               }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Уровни.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
       </Map>
      </YMaps>
      </div>
     
{/* <div className="content10">
<button className="btn10"><a>
    <b>Витебская ГЭС</b><br></br>
    Год ввода в эксплуатацию: 2016-2017<br></br>
    Река (канал): река Западная Двина<br></br>
    Установленная мощность, МВт: 40<br></br>
    Собственник: Белэнерго<br></br>
    <a href="https://yandex.ru/map-widget/v1/?um=constructor%3A484bab4bbd70e81e0c2dc5fa4ab8d9488549414838b0090bf5842b07c61aeb96&amp;source=constructor">Посмотреть на карте</a>
    </a></button>
    <button className="btn10"><a>
    <b>Полоцкая ГЭС</b><br></br>
    Год ввода в эксплуатацию: 2017<br></br>
    Река (канал): река Западная Двина<br></br>
    Установленная мощность, МВт: 21,6<br></br>
    Собственник: Белэнерго<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>Гродненская ГЭС</b><br></br>
    Год ввода в эксплуатацию: 2012<br></br>
    Река (канал): река Неман<br></br>
    Установленная мощность, МВт: 17<br></br>
    Собственник: Белэнерго<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Немново</b><br></br>
    Год ввода в эксплуатацию: 2004<br></br>
    Река (канал): Августовский канал<br></br>
    Установленная мощность, МВт: 0,1<br></br>
    Собственник: Белэнерго<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Новосады</b><br></br>
    Год ввода в эксплуатацию: 2013<br></br>
    Река (канал): река Муховец<br></br>
    Установленная мощность, МВт: 0,3<br></br>
    Собственник: РУЭСП "Днепробугводпуть"<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Залузье</b><br></br>
    Год ввода в эксплуатацию: 2011<br></br>
    Река (канал): река Муховец<br></br>
    Установленная мощность, МВт: 0,18<br></br>
    Собственник: РУЭСП "Днепробугводпуть"<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Кобрин</b><br></br>
    Год ввода в эксплуатацию: 2012<br></br>
    Река (канал): река Муховец<br></br>
    Установленная мощность, МВт: 0,2<br></br>
    Собственник: РУЭСП "Днепробугводпуть"<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Дубой</b><br></br>
    Год ввода в эксплуатацию: 2008<br></br>
    Река (канал): река Пина<br></br>
    Установленная мощность, МВт: 0,11<br></br>
    Собственник: РУЭСП "Днепробугводпуть"<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС Стахово</b><br></br>
    Год ввода в эксплуатацию: 2015<br></br>
    Река (канал): река Припять<br></br>
    Установленная мощность, МВт: 0,63<br></br>
    Собственник: РУЭСП "Днепробугводпуть"<br></br>
    </a></button>
    <button className="btn10"><a>
    <b>ГЭС в Дроздах</b><br></br>
    Год ввода в эксплуатацию: 2008<br></br>
    Река (канал): река Свислочь<br></br>
    Установленная мощность, МВт: 0,3<br></br>
    Собственник: РУП "Минскводоканал"<br></br>
    </a></button>
</div> */}

</div>

)
    }
}

export default Levelgp;