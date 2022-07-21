import React from "react"
import './Porty.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup } from "@mui/material";
import Paper from '@mui/material/Paper';


const columns = [
    {
      field: 'nameg',
      headerName: 'Наименование ',
      width: 250,
      align:"center"
    },
    {
      field: 'yearg',
      headerName: 'Год ввода в эксплуатацию',
      width: 150,
      align:"center"
    },
    {
      field: 'riverg',
      headerName: 'Река (канал)',
      width: 150,
      align:"center"
    },
    {
      field: 'bereg',
      headerName: 'Берег',
      width: 200,
      align:"center"
    },
    {
      field: 'place',
      headerName: 'Местоположение',
      width: 200,
      align:"center"
    },
    {
      field: 'leng',
      headerName: 'Длина причала',
      width: 200,
      align:"center"
    }
  ];
 
  const port = [
    {
        data: { content: 'Бобруйск' },
        options: { selectOnClick: false },
        coords: [53.131762589500156,29.25533499999986 ],
      }
  ];
  const port1 = [
    {
        data: { content: 'Гомель' },
        options: { selectOnClick: false },
        coords: [52.435071071779745,31.01805450000001],
      }
  ];
  const port2 = [
    {
        data: { content: 'Могилев' },
        options: { selectOnClick: false },
        coords: [53.86979955176414,30.291209499999987],
      }
  ];
  const port3 = [
    {
        data: { content: 'Речица' },
        options: { selectOnClick: false },
        coords: [ 52.39680163930974,30.345103313491748  ],
      }
  ];
  const port4 = [
    {
        data: { content: 'Брест' },
        options: { selectOnClick: false },
        coords: [52.083107137592435,23.688582999999998 ],
      }
  ];
  const port5 = [
    {
        data: { content: 'Пинск ' },
        options: { selectOnClick: false },
        coords: [52.110753636465255,26.013656499999954 ],
      }
  ];
  const port6 = [
    {
        data: { content: 'Мозырь' },
        options: { selectOnClick: false },
        coords: [ 52.07759457203131,29.24128549999992 ],
      }
  ];
  const port7 = [
    {
        data: { content: 'Микашевичи' },
        options: { selectOnClick: false },
        coords: [52.20556213229366,27.40035900000002 ],
      }
  ];
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
// function Porty () {
    const rows= [
        { id: 1, nameg: 'Речной порт Бобруйск',  yearg: '1970', riverg: 'река Березина', bereg: 'Левый', place: '170 км от устья р.Березина', leng: '560 м'},
        { id: 1, nameg: 'Речной порт Гомель',  yearg: '1933', riverg: 'река Сож', bereg: 'Правый', place: '100 км от устья р.Сож', leng: '560 м'},
        { id: 1, nameg: 'Речной порт Могилев',  yearg: '1976', riverg: 'река Днепр', bereg: 'Левый', place: '1508 км от устья р.Днепр', leng: ' 760 м'},
        { id: 1, nameg: 'Речной порт Речица',  yearg: '1944', riverg: 'река Днепр', bereg: 'Правый', place: '1171 км от устья р.Днепр', leng: '760 м'},
        { id: 1, nameg: 'Речной порт Брест',  yearg: '1950', riverg: 'река Муховец', bereg: 'Правый', place: '194 км от от г.Пинск', leng: '210 м'},
        { id: 1, nameg: 'Речной порт Пинск',  yearg: '1939', riverg: 'река Пина', bereg: 'Левый', place: ' 8 км от устья г.Пинск', leng: '346 м'},
        { id: 1, nameg: 'Речной порт Мозырь',  yearg: '1963', riverg: 'река Припять', bereg: 'Левый', place: '188 км от устья р.Припять', leng: '800 м'},
        { id: 1, nameg: 'Речной порт Микашевичи',  yearg: '1978', riverg: ' Микашевичский канал', bereg: 'Правый', place: '6,4 км от устья Микашевичского канала', leng: '300 м'},
      ]
class Porty extends React.Component{
    state = mapState;

    onItemClick = coords => {
      this.setState({ center: coords, zoom: 15 });
    };

    render (){
return ( <div className="grid-container789">
<div className="p1" style={{ height: 670, width: '100%'}}>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Наименование</b></TableCell>
            <TableCell align="center"><b>Год ввода в эксплуатацию</b></TableCell>
            <TableCell align="center"><b>Река (канал)</b> </TableCell>
            <TableCell align="center"><b>Берег</b></TableCell>
            <TableCell align="center"><b>Местоположение</b></TableCell>
            <TableCell align="center"><b>Длина причала</b></TableCell>
            <TableCell align="center"><b>На карте</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell align="center">Речной порт Бобруйск</TableCell>
              <TableCell align="center">1970</TableCell>
              <TableCell align="center">река Березина</TableCell>
              <TableCell align="center">Левый</TableCell>
              <TableCell align="center">170 км от устья р.Березина</TableCell>
              <TableCell align="center">560 м</TableCell>
              <TableCell align="center"> {port.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Гомель</TableCell>
              <TableCell align="center">1933</TableCell>
              <TableCell align="center">река Сож</TableCell>
              <TableCell align="center">Правый</TableCell>
              <TableCell align="center">100 км от устья р.Сож</TableCell>
              <TableCell align="center">560 м</TableCell>
              <TableCell align="center"> {port1.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Могилев</TableCell>
              <TableCell align="center">1976</TableCell>
              <TableCell align="center">река Днепр</TableCell>
              <TableCell align="center">Левый</TableCell>
              <TableCell align="center">1508 км от устья р.Днепр</TableCell>
              <TableCell align="center">760 м</TableCell>
              <TableCell align="center"> {port2.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Речица</TableCell>
              <TableCell align="center">1944</TableCell>
              <TableCell align="center">река Днепр</TableCell>
              <TableCell align="center">Правый</TableCell>
              <TableCell align="center">1171 км от устья р.Днепр</TableCell>
              <TableCell align="center">760 м</TableCell>
              <TableCell align="center"> {port3.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Брест</TableCell>
              <TableCell align="center">1950</TableCell>
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">Правый</TableCell>
              <TableCell align="center">194 км от от г.Пинск</TableCell>
              <TableCell align="center">210 м</TableCell>
              <TableCell align="center"> {port4.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Пинск</TableCell>
              <TableCell align="center">1939</TableCell>
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">Левый</TableCell>
              <TableCell align="center">8 км от устья г.Пинск</TableCell>
              <TableCell align="center">346 м</TableCell>
              <TableCell align="center"> {port5.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Мозырь</TableCell>
              <TableCell align="center">1963</TableCell>
              <TableCell align="center">река Припять</TableCell>
              <TableCell align="center">Левый</TableCell>
              <TableCell align="center">188 км от устья р.Припять</TableCell>
              <TableCell align="center">800 м</TableCell>
              <TableCell align="center"> {port6.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Речной порт Микашевичи</TableCell>
              <TableCell align="center">1978</TableCell>
              <TableCell align="center">Микашевичский канал</TableCell>
              <TableCell align="center">Правый</TableCell>
              <TableCell align="center">6,4 км от устья Микашевичского канала</TableCell>
              <TableCell align="center">300 м</TableCell>
              <TableCell align="center"> {port7.map(ges =>
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
    <div className="p2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='650px'  state={this.state}>
        <SearchControl options={{
        float: 'right'
         }}  />
    <Placemark geometry={[53.131762589500156,29.25533499999986]} properties={{balloonContentBody: [
          '<strong>Адрес: 213826, г. Бобруйск, </strong>',
          '<br/>',
          '<strong> пер. Циолковского, 26</strong>',
          '<br/>',
          '<strong>Тел./факс +375 225 70-57-36</strong>',
          '<br/>',
          '<strong>E-mail: portbobr@tut.by</strong>',
          '<br/>',
          '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=76&Itemid=229" target="blank" rel="nofollow">Подробнее</a>', 
          '<br/>',  
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/char2.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
     <Placemark geometry={[53.86979955176414,30.291209499999987]} properties={{balloonContentBody: [
          '<strong>Адрес: 212021, г. Могилев, ул. Кутепова, 28 </strong>',
          '<br/>',
          '<strong>Тел./факс +375 222 32-29-70 </strong>',
          '<br/>',
          '<strong>E-mail: rechport@mogilev.by</strong>',
          '<br/>',
          '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=77&Itemid=228" target="blank" rel="nofollow">Подробнее</a>',
           '<br/>',   
             ]}} 
             options={{
              iconLayout: 'default#image',
              iconImageHref: '/char2.png',
              iconImageSize: [30, 30],
              // iconImageOffset: [-15, -35],
              // // iconContentOffset: [25, 25],
                      }} />
                        <Placemark geometry={[ 52.435071071779745,31.01805450000001]}     properties={{balloonContentBody: [
          '<strong>Адрес: 246022, г. Гомель, ул. Подгорная, 2</strong>',
          '<br/>',
          '<strong>Тел./факс +375 232 31-91-73</strong>',
          '<br/>',
          '<strong>E-mail: portgomel@tut.by</strong>',
          '<br/>',
          '<strong>Сайт: www.portgomel.by</strong>',
          '<br/>',
          '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=74&Itemid=231" target="blank" rel="nofollow">Подробнее</a>'
          ]}}      
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/char2.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
           <Placemark geometry={[52.39680163930974,30.345103313491748]} properties={{balloonContentBody: [
          '<strong>Адрес: 247519, Речицкий р-н, </strong>',
          '<br/>',
           '<strong> д. Озерщина, ул. Судостроительная, 10</strong>',
           '<br/>',
          '<strong>Тел./факс +375 2340 99-500</strong>',
          '<br/>',
          '<strong>E-mail: brp-port-rechitsa@tut.by</strong>',
          '<br/>',
          '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=75&Itemid=230" target="blank" rel="nofollow">Подробнее</a>', 
          '<br/>',
          ]}} 
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/char2.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
            <Placemark 
       geometry={[52.083107137592435,23.688582999999998]}
        properties={{balloonContentBody: [
                    '<strong>Адрес: 224030, г. Брест,  </strong>',
                    '<br/>',
                    '<strong> ул. Интернациональная, 5 </strong>',
                    '<br/>',
                    '<strong>Тел./факс +375 162 20-41-14</strong>',
                    '<br/>',
                    '<strong>E-mail: portbrest@tut.by</strong>',
                      '</br>',
                    '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=81&Itemid=224" target="blank" rel="nofollow">Подробнее</a>',
                    '<br/>'     
                  ]}}
          options={{
          iconLayout: 'default#image',
          iconImageHref: '/char2.png',
          iconImageSize: [30, 30],
          // iconImageOffset: [-15, -35],
          // // iconContentOffset: [25, 25],
                  }} />
               <Placemark geometry={[52.110753636465255,26.013656499999954]} properties={{balloonContentBody: [
              '<strong>Адрес: 225710, г. Пинск-8, а/я 13 </strong>',
              '<br/>',
              '<strong>Тел./факс +375 165 61-57-84</strong>',
              '<br/>',
              '<strong>E-mail: portpinskpriem@tut.by</strong>',
              '<br/>',
              '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=80&Itemid=225" target="blank" rel="nofollow">Подробнее</a>',
              '<br/>'
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/char2.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
        <Placemark geometry={[ 52.07759457203131,29.24128549999992]}  properties={{balloonContentBody: [
           '<strong>Адрес: 247760, г. Мозырь, ул. Портовая, 23</strong>',
            '<br/>',
            '<strong>Тел./факс +375 236 25-31-50</strong>',
            '<br/>',
            '<strong>E-mail: mzport2011@tut.by</strong>',
            '<br/>',
            '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=79&Itemid=227" target="blank" rel="nofollow">Подробнее</a>',
            '<br/>',
            ]}}
            options={{
              iconLayout: 'default#image',
              iconImageHref: '/char2.png',
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -35],
              iconContentOffset: [25, 25],
        }} />
             <Placemark geometry={[52.20556213229366,27.40035900000002]} properties={{balloonContentBody: [
          '<strong>Адрес: 225680, Брестская обл., </strong>',
          '<br/>',
           '<strong> Лунинецкий р-н, п/о "Гранитное" </strong>',
            '<br/>',
          '<strong>Тел./факс +375 1647 27-642</strong>',
          '<br/>',
          '<strong>E-mail: rech_port@tut.by</strong>',
          '<br/>',
          '<a href="http://www.parohodstvo.by/index.php?option=com_rspagebuilder&view=page&id=78&Itemid=226" target="blank" rel="nofollow">Подробнее</a>',  
          '<br/>', 
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/char2.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
       </Map>
      </YMaps>
      </div>
{/* <div className="content9">
<button className="btn9"><a>
    <b>Речной порт Бобруйск</b><br></br>
    Год ввода в эксплуатацию: 1970<br></br>
    Река (канал): река Березина<br></br>
    Берег: Левый<br></br>
    Местоположение: 170 км от устья р.Березина<br></br>
    Длина всего причала: 560 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Гомель</b><br></br>
    Год ввода в эксплуатацию: 1933<br></br>
    Река (канал): река Сож<br></br>
    Берег: Правый<br></br>
    Местоположение: 100 км от устья р.Сож<br></br>
    Длина всего причала: 455 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Могилев</b><br></br>
    Год ввода в эксплуатацию: 1976<br></br>
    Река (канал): река Днепр<br></br>
    Берег: Левый<br></br>
    Местоположение: 1508 км от устья р.Днепр<br></br>
    Длина всего причала: 760 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Речица</b><br></br>
    Год ввода в эксплуатацию: 1944<br></br>
    Река (канал): река Днепр<br></br>
    Берег: Правый<br></br>
    Местоположение: 1171 км от устья р.Днепр<br></br>
    Длина всего причала: 760 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Брест</b><br></br>
    Год ввода в эксплуатацию: 1950<br></br>
    Река (канал): река Муховец<br></br>
    Берег: Правый<br></br>
    Местоположение: 194 км от от г.Пинск<br></br>
    Длина всего причала: 210 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Пинск</b><br></br>
    Год ввода в эксплуатацию: 1939<br></br>
    Река (канал): река Пина<br></br>
    Берег: Левый<br></br>
    Местоположение: 8 км от устья г.Пинск<br></br>
    Длина всего причала: 346 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Мозырь</b><br></br>
    Год ввода в эксплуатацию: 1963<br></br>
    Река (канал): река Припять<br></br>
    Берег: Левый<br></br>
    Местоположение: 188 км от устья р.Припять<br></br>
    Длина всего причала: 800 м<br></br>
    </a></button>
    <button className="btn9"><a>
    <b>Речной порт Микашевичи</b><br></br>
    Год ввода в эксплуатацию: 1978<br></br>
    Река (канал): Микашевичский канал<br></br>
    Берег: Правый<br></br>
    Местоположение: 6,4 км от устья Микашевичского канала<br></br>
    Длина всего причала: 300 м<br></br>
    </a></button>
</div> */}
</div>

)
}
}
export default Porty;