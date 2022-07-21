import React from "react"
import './Levelsgt.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup } from "@mui/material";
import Paper from '@mui/material/Paper';


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
  const rows= [
    { id: 1, nameg: 'Витебская ГЭС',  yearg: '2016-2017', riverg: 'река Западная Двина', powerg: '40', sobg: 'Белэнерго'},
    { id: 2, nameg: 'Полоцкая ГЭС',  yearg: '2017', riverg: 'река Западная Двина', powerg: '21,6', sobg: 'Белэнерго'},
    { id: 3, nameg: 'Гродненская ГЭС',  yearg: '2012', riverg: 'река Неман', powerg: '17', sobg: 'Белэнерго'},
    { id: 4, nameg: 'ГЭС Немново',  yearg: '2004', riverg: 'Августовский канал', powerg: '0,1', sobg: 'Белэнерго'},
    { id: 5, nameg: 'ГЭС Новосады',  yearg: '2013', riverg: 'река Муховец', powerg: '0,3', sobg: 'Днепробугводпуть'},
    { id: 6, nameg: 'ГЭС Залузье',  yearg: '2011', riverg: 'река Муховец', powerg: '0,18', sobg: 'Днепробугводпуть'},
    { id: 8, nameg: 'ГЭС Дубой',  yearg: '2008', riverg: 'река Пин', powerg: '0,11', sobg: 'Днепробугводпуть'},
    { id: 9, nameg: 'ГЭС Стахово',  yearg: '2015', riverg: 'река Припять', powerg: ' 0,63', sobg: 'Днепробугводпуть'},
    { id: 10, nameg: 'ГЭС в Дроздах',  yearg: '2008', riverg: 'река Свислоч', powerg: '0,3', sobg: 'РУП "Минскводоканал"'}
  ]
  const geses = [
    {
      data: { content: 'Стахово' },
      options: { selectOnClick: false },
      coords: [52.081124, 26.721849],
    }
  ];
  const geses1 = [
    {
      data: { content: 'Качановичи' },
      options: { selectOnClick: false },
      coords: [52.10919110102027, 26.430443389344035],
    }
  ];
  const geses2 = [
    {
      data: { content: 'Дубой' },
      options: { selectOnClick: false },
      coords: [52.030243601873785, 26.862916982540725],
    }
  ];
  const geses3 = [
    {
      data: { content: 'Переруб' },
      options: { selectOnClick: false },
      coords: [52.04220084259053, 25.612716468384168],
    }
  ];
  const geses4 = [
    {
      data: { content: 'Рагодощ' },
      options: { selectOnClick: false },
      coords: [52.04003042179492, 25.470069309535344],
    }
  ];
  const geses5 = [
    {
      data: { content: 'Овзичи' },
      options: { selectOnClick: false },
      coords: [52.050676732045346, 25.314461061532615],
    }
  ];
  const geses6 = [
    {
      data: { content: 'Ляховичи' },
      options: { selectOnClick: false },
      coords: [53.038887342021184, 26.259713761562068],
    }
  ];
  const geses7 = [
    {
      data: { content: 'Кобрин' },
      options: { selectOnClick: false },
      coords: [52.209271637978304, 24.351166233394263 ],
    }
  ];
  const geses8 = [
    {
      data: { content: 'Залузье' },
      options: { selectOnClick: false },
      coords: [52.198701612705555, 24.146316930207266],
    }
  ];
  const geses9 = [
    {
      data: { content: 'Тришин' },
      options: { selectOnClick: false },
      coords: [52.09111783368861, 23.741324972020646],
    }
  ];
  const geses10 = [
    {
      data: { content: 'Брест плотина' },
      options: { selectOnClick: false },
      coords: [52.083828006110416, 23.663883865425976],
    }
  ];
  const geses11 = [
    {
      data: { content: 'ВитебскШ' },
      options: { selectOnClick: false },
      coords: [55.25057914419861, 30.154536608085877],
    }
  ];
  const geses12 = [
    {
      data: { content: 'Гродненская ГЭС' },
      options: { selectOnClick: false },
      coords: [53.644185340935366, 23.973677959873232],
    }
  ];
  const geses13 = [
    {
      data: { content: 'Белорусская часть г/у Кужинец' },
      options: { selectOnClick: false },
      coords: [53.86099082909552, 23.531375267596573],
    }
  ];
  const geses14 = [
    {
      data: { content: 'Волкушек' },
      options: { selectOnClick: false },
      coords: [53.86262283938815, 23.624374231043678],
    }
  ];
  const geses15 = [
    {
      data: { content: 'Домбровка' },
      options: { selectOnClick: false },
      coords: [53.86244568175918, 23.624663909606298],
    }
  ];
  const geses16 = [
    {
      data: { content: 'Немново' },
      options: { selectOnClick: false },
      coords: [53.869544445858615, 23.756953810882084],
    }
  ];
  
  
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };


  

  class Levelsgt extends React.Component{
// function Ges () {
    state = mapState;

    onItemClick = coords => {
      this.setState({ center: coords, zoom: 15 });
    };

    render (){
return ( <div className="grid-container12">

<div className="g1" style={{ height: 670, width: '100%'}}>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center"><b>Наименование гидроузлов</b></TableCell>
            <TableCell align="center"><b>Уровень воды</b></TableCell>
            <TableCell align="center"><b>Температура воды</b></TableCell>
            <TableCell align="center"><b>На карте</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №12 Стахово</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №11 Качановичи</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses1.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №1 Дубой</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses2.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №2 Переруб</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses3.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №3 Рагодощ</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses4.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №4 Овзичи</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses5.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №5 Ляховичи</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses7.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
           
          <TableRow
            >
              <TableCell align="center">Судоходный г/у Кобрин</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses6.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №8 Залузье</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses8.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у №10 Тришин</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses9.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Брест плотина</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses10.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный шлюз Витебская ГЭС</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses11.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Гродненская ГЭС</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses12.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Белорусская часть г/у Кужинец</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses13.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у Волкушек</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses14.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у Домбровка</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses15.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Судоходный г/у Немново</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">20</TableCell>
              <TableCell align="center"> {geses16.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
     
      <div className="g2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='850px'  state={this.state}>
        <SearchControl options={{
        float: 'right'
         }}  />
      <Placemark geometry={[52.081124, 26.721849]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №12 Стахово </strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
      <Placemark geometry={[52.10919110102027, 26.430443389344035]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №11 Качановичи</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
                    <Placemark geometry={[52.030243601873785, 26.862916982540725]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №1 Дубой </strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
                     <Placemark geometry={[52.04220084259053, 25.612716468384168]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №2 Переруб</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
           <Placemark geometry={[52.04003042179492, 25.470069309535344]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №3 Рагодощ</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
           <Placemark geometry={[52.050676732045346, 25.314461061532615]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №4 Овзичи</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
          <Placemark geometry={[ 53.038887342021184, 26.259713761562068]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №5 Ляховичи</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[ 52.209271637978304, 24.351166233394263]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у Кобрин</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[52.198701612705555, 24.146316930207266]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №8 Залузье</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
             <Placemark geometry={[52.09111783368861, 23.741324972020646]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у №10 Тришин</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
         <Placemark geometry={[52.083828006110416, 23.663883865425976]} properties={{balloonContentBody: [
          '<strong>Брест плотина </strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[ 55.25057914419861, 30.154536608085877]} properties={{balloonContentBody: [
          '<strong>Судоходный шлюз Витебская ГЭС</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[53.644185340935366, 23.973677959873232]} properties={{balloonContentBody: [
          '<strong>Гродненская ГЭС</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
            <Placemark geometry={[53.86099082909552, 23.531375267596573]} properties={{balloonContentBody: [
          '<strong>Белорусская часть г/у Кужинец</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
           <Placemark geometry={[53.86262283938815, 23.624374231043678]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у Волкушек/strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
            <Placemark geometry={[53.86244568175918, 23.624663909606298]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у Домбровка</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
          <Placemark geometry={[53.869544445858615, 23.756953810882084]} properties={{balloonContentBody: [
          '<strong>Судоходный г/у Немново</strong>',
          '<br/>',
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/УровниГТС.png',
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

export default Levelsgt;