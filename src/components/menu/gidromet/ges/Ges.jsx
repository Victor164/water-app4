import React from "react"
import './Ges.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup, TablePagination } from "@mui/material";
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
      data: { content: 'Витебская' },
      options: { selectOnClick: false },
      coords: [55.25153362223599, 30.15994864258706],
    }
  ];
  const geses1 = [
    {
      data: { content: 'Полоцкая ГЭС' },
      options: { selectOnClick: false },
      coords: [55.432824129446296, 28.946897050129326],
    }
  ];
  const geses2 = [
    {
      data: { content: 'Гродненская ГЭС' },
      options: { selectOnClick: false },
      coords: [53.64524425246265, 23.973369479701983],
    }
  ];
  const geses3 = [
    {
      data: { content: 'ГЭС Немново' },
      options: { selectOnClick: false },
      coords: [53.86175072704196, 23.748768988684148],
    }
  ];
  const geses4 = [
    {
      data: { content: 'ГЭС Новосады' },
      options: { selectOnClick: false },
      coords: [52.08311915, 23.57087108],
    }
  ];
  const geses5 = [
    {
      data: { content: 'ГЭС Залузье' },
      options: { selectOnClick: false },
      coords: [52.190979076169235, 24.12841961344715],
    }
  ];
  const geses6 = [
    {
      data: { content: 'ГЭС Дубой' },
      options: { selectOnClick: false },
      coords: [52.02253924052849, 25.472331461011795],
    }
  ];
  const geses7 = [
    {
      data: { content: 'ГЭС Кобрин' },
      options: { selectOnClick: false },
      coords: [52.2119336565074, 24.397060607471715 ],
    }
  ];
  const geses8 = [
    {
      data: { content: 'ГЭС Стахово' },
      options: { selectOnClick: false },
      coords: [52.111088249102814, 26.735589357570852],
    }
  ];
  const geses9 = [
    {
      data: { content: 'ГЭС Дрозды' },
      options: { selectOnClick: false },
      coords: [53.9559449816927, 27.382286413366394 ],
    }
  ];
  
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };


  

  class Ges extends React.Component{
// function Ges () {
    state = mapState;

    onItemClick = coords => {
      this.setState({ center: coords, zoom: 15 });
    };

    render (){
return ( <div className="grid-container1">

    <div className="g1" style={{ height: 670, width: '100%'}}>
    <TableContainer 
    component={Paper}
   >
      <Table  
      aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Наименование</b></TableCell>
            <TableCell align="center"><b>Год ввода в эксплуатацию</b></TableCell>
            <TableCell align="center"><b>Река (канал)</b></TableCell>
            <TableCell align="center"><b>Установленная мощность, МВт</b></TableCell>
            <TableCell align="center"><b>Собственник</b></TableCell>
            <TableCell align="center"><b>На карте</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell align="center">Витебская ГЭС</TableCell>
              <TableCell align="center">2016-2017</TableCell>
              <TableCell align="center">река Западная Двина</TableCell>
              <TableCell align="center">40</TableCell>
              <TableCell align="center">Белэнерго</TableCell>
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
              <TableCell align="center">Полоцкая ГЭС</TableCell>
              <TableCell align="center">2017</TableCell>
              <TableCell align="center">река Западная Двина</TableCell>
              <TableCell align="center">21,6</TableCell>
              <TableCell align="center">Белэнерго</TableCell>
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
              <TableCell align="center">Гродненская ГЭС</TableCell>
              <TableCell align="center">2012</TableCell>
              <TableCell align="center">река Неман</TableCell>
              <TableCell align="center">17</TableCell>
              <TableCell align="center">Белэнерго</TableCell>
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
              <TableCell align="center">ГЭС Немново</TableCell>
              <TableCell align="center">2004</TableCell>
              <TableCell align="center">река Неман</TableCell>
              <TableCell align="center">0,1</TableCell>
              <TableCell align="center">Белэнерго</TableCell>
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
              <TableCell align="center">ГЭС Новосады</TableCell>
              <TableCell align="center">2013</TableCell>
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">0,3</TableCell>
              <TableCell align="center">Днепробугводпуть</TableCell>
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
              <TableCell align="center">ГЭС Залузье</TableCell>
              <TableCell align="center">2011</TableCell>
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">0,18</TableCell>
              <TableCell align="center">Днепробугводпуть</TableCell>
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
              <TableCell align="center">ГЭС Дубой</TableCell>
              <TableCell align="center">2008</TableCell>
              <TableCell align="center">река Пина</TableCell>
              <TableCell align="center">0,11</TableCell>
              <TableCell align="center">Днепробугводпуть</TableCell>
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
              <TableCell align="center">ГЭС Кобрин</TableCell>
              <TableCell align="center">2012</TableCell>
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">0,2</TableCell>
              <TableCell align="center">Днепробугводпуть</TableCell>
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
              <TableCell align="center">ГЭС Стахово</TableCell>
              <TableCell align="center">2015</TableCell>
              <TableCell align="center">река Припять</TableCell>
              <TableCell align="center">0,63</TableCell>
              <TableCell align="center">Днепробугводпуть</TableCell>
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
              <TableCell align="center">ГЭС в Дроздах</TableCell>
              <TableCell align="center">2008</TableCell>
              <TableCell align="center">река Свислочь</TableCell>
              <TableCell align="center">0,3</TableCell>
              <TableCell align="center">Минскводоканал</TableCell>
              <TableCell align="center"> {geses9.map(ges =>
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
    {/* <DataGrid
     localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
     rows={rows}
     columns={columns}
     pageSize={10}
     disableColumnFilter
     disableColumnSelector
     disableDensitySelector
    //  disableSelectionOnClick
     components={{
     Toolbar: QuickSearchToolbar,
        }}
        componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
      />    */}
      </div>
     
      <div className="g2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='750px'  state={this.state}>
        <SearchControl options={{
        float: 'right'
         }}  />
         <Placemark geometry={[55.25153362223599, 30.15994864258706]} 
           properties={{balloonContentBody:[ "Витебская ГЭС <br></br>Год ввода в эксплуатацию: 2016-2017 <br> Река (канал): река Западная Двина <br> Установленная мощность, МВт: 40 <br> Собственник: Белэнерго"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
         <Placemark geometry={[55.432824129446296, 28.946897050129326]} 
           properties={{balloonContentBody:[ "Полоцкая ГЭС <br></br>Год ввода в эксплуатацию: 2017 <br> Река (канал): река Западная Двина <br> Установленная мощность, МВт: 21,6 <br> Собственник: Белэнерго"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
             <Placemark geometry={[53.64524425246265, 23.973369479701983]} 
           properties={{balloonContentBody:[ "Гродненская ГЭС <br></br>Год ввода в эксплуатацию: 2012 <br> Река (канал): река Неман <br> Установленная мощность, МВт: 17 <br> Собственник: Белэнерго"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
                  <Placemark geometry={[53.86175072704196, 23.748768988684148]} 
           properties={{balloonContentBody:[ "Немново ГЭС <br></br>Год ввода в эксплуатацию: 2004 <br> Река (канал): Августовский канал <br> Установленная мощность, МВт: 0,1 <br> Собственник: Белэнерго"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
               <Placemark geometry={[52.08311915, 23.57087108]} 
           properties={{balloonContentBody:[ "Новосады ГЭС <br></br>Год ввода в эксплуатацию: 2013 <br> Река (канал): река Муховец <br> Установленная мощность, МВт: 0,3 <br> Собственник: РУЭСП Днепробугводпуть"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
               <Placemark geometry={[52.190979076169235, 24.12841961344715]} 
           properties={{balloonContentBody:[ "Залузье ГЭС <br></br>Год ввода в эксплуатацию: 2011 <br> Река (канал): река Муховец <br> Установленная мощность, МВт: 0,18 <br> Собственник: РУЭСП Днепробугводпуть"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
                  <Placemark geometry={[52.2119336565074, 24.397060607471715]} 
           properties={{balloonContentBody:[ "Кобрин ГЭС <br></br>Год ввода в эксплуатацию: 2012 <br> Река (канал): река Муховец <br> Установленная мощность, МВт: 0,2 <br> Собственник: РУЭСП Днепробугводпуть"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
                   <Placemark geometry={[52.02253924052849, 25.472331461011795]} 
           properties={{balloonContentBody:[ "Дубой ГЭС <br></br>Год ввода в эксплуатацию: 2008 <br> Река (канал): река Пина <br> Установленная мощность, МВт: 0,11 <br> Собственник: РУЭСП Днепробугводпуть"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
             <Placemark geometry={[52.111088249102814, 26.735589357570852 ]} 
           properties={{balloonContentBody:[ "Стахово ГЭС <br></br>Год ввода в эксплуатацию: 2015 <br> Река (канал): река Припять <br> Установленная мощность, МВт: 0,63 <br> Собственник: РУЭСП Днепробугводпуть"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
          }} />
             <Placemark geometry={[53.9559449816927, 27.382286413366394 ]} 
           properties={{balloonContentBody:[ "Дрозды ГЭС <br></br>Год ввода в эксплуатацию: 2011 <br> Река (канал): река Свислоч <br> Установленная мощность, МВт: 0,3 <br> Собственник: РУП Минскводоканал"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/ГЭС.png',
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

export default Ges;