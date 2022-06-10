import React from "react"
import './Ges.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox, Button,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';


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
  const getApplyFilterFnSameYear = (value) => {
    if (!value || value.length !== 4 || !/\d{4}/.test(value)) {
      return null;
    }
    return (params) => {
      return params.value.getFullYear() === Number(value);
    };
  };
const CustomToolbar=({setFilterButtonEl})=> {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton ref={setFilterButtonEl} />
      </GridToolbarContainer>
    );
  }
  CustomToolbar.propTypes = {
    setFilterButtonEl: PropTypes.func.isRequired,
  };
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
      width: 200
    },
    {
      field: 'map',
      headerName: 'Показаать на карте',
      width: 200
    }
  ];
  const rows= [
    { id: 1, nameg: 'Витебская ГЭС',  yearg: '2016-2017', riverg: 'река Западная Двина', powerg: '40', sobg: 'Белэнерго',map:'Карта'},
    { id: 2, nameg: 'Полоцкая ГЭС',  yearg: '2017', riverg: 'река Западная Двина', powerg: '21,6', sobg: 'Белэнерго', map:'Карта'},
    { id: 3, nameg: 'Гродненская ГЭС',  yearg: '2012', riverg: 'река Неман', powerg: '17', sobg: 'Белэнерго', map:'Карта'},
    { id: 4, nameg: 'ГЭС Немново',  yearg: '2004', riverg: 'Августовский канал', powerg: '0,1', sobg: 'Белэнерго', map:'Карта'},
    { id: 5, nameg: 'ГЭС Новосады',  yearg: '2013', riverg: 'река Муховец', powerg: '0,3', sobg: 'Днепробугводпуть',map:'Карта'},
    { id: 6, nameg: 'ГЭС Залузье',  yearg: '2011', riverg: 'река Муховец', powerg: '0,18', sobg: 'Днепробугводпуть', map:'Карта'},
    { id: 7, nameg: 'ГЭС Кобрин',  yearg: '2012', riverg: 'река Муховец', powerg: '0,2', sobg: 'Днепробугводпуть', map:'Карта'},
    { id: 8, nameg: 'ГЭС Дубой',  yearg: '2008', riverg: 'река Пин', powerg: '0,11', sobg: 'Днепробугводпуть', map:'Карта'},
    { id: 9, nameg: 'ГЭС Стахово',  yearg: '2015', riverg: 'река Припять', powerg: ' 0,63', sobg: 'Днепробугводпуть', map:'Карта'},
    { id: 10, nameg: 'ГЭС в Дроздах',  yearg: '2008', riverg: 'река Свислоч', powerg: '0,3', sobg: 'РУП "Минскводоканал"', map:'Карта'},
  ]
  const geses = [
    {
      data: { content: 'Витебская' },
      options: { selectOnClick: false },
      coords: [55.25153362223599, 30.15994864258706],
    },
    {
      data: { content: 'Полоцкая ' },
      options: { selectOnClick: false },
      coords: [55.432824129446296, 28.946897050129326 ],
    },
    {
      data: { content: 'Гродненская' },
      options: { selectOnClick: false },
      coords: [53.64524425246265, 23.973369479701983],
    },
    {
      data: { content: 'Немново' },
      options: { selectOnClick: false },
      coords: [ 53.86175072704196, 23.748768988684148 ],
    },
    {
      data: { content: 'Новосады' },
      options: { selectOnClick: false },
      coords: [52.08311915, 23.57087108 ],
    },
    {
      data: { content: 'Залузье' },
      options: { selectOnClick: false },
      coords: [52.190979076169235, 24.12841961344715],
    },
    {
      data: { content: 'Кобрин' },
      options: { selectOnClick: false },
      coords: [52.2119336565074, 24.397060607471715 ],
    }
    ,
    {
      data: { content: 'Дубой' },
      options: { selectOnClick: false },
      coords: [52.02253924052849, 25.472331461011795],
    }
    ,
    {
      data: { content: 'Стахово' },
      options: { selectOnClick: false },
      coords: [52.111088249102814, 26.735589357570852 ],
    }
    ,
    {
      data: { content: 'Дроздах' },
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

{/* <div><b className="name9">ГЭС на внутренних водных путях Республики Беларусь  </b></div> */}
      <div className="g1" style={{ height: 670, width: '100%'}}>
    <DataGrid
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
      />
    

      </div>
      <div className="g2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='650px'  state={this.state}>
        {/* <ListBox data={{
      content: 'ГЭС'
       }}>
         {geses.map(ges =>
          <ListBoxItem data={ges.data}
          options={ges.options}
          onClick={() => this.onItemClick(ges.coords)}
          key={ges.data.content}
         />
         )}
         </ListBox> */}
            <Placemark geometry={[55.25153362223599, 30.15994864258706]} 
           properties={{balloonContentBody:[ "wdfwd"
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