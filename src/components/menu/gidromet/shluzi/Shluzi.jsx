import React from "react"
import './Shluzi.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter, ruRU} from '@mui/x-data-grid';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup } from "@mui/material";
import Paper from '@mui/material/Paper';

const shluzi = [
    {
        data: { content: 'Дубой' },
        options: { selectOnClick: false },
        coords: [52.07921035234239,25.774520989519985 ],
      }
  ];
  const shluzi1 = [
    {
        data: { content: 'Переруб' },
        options: { selectOnClick: false },
        coords: [52.03550325192842,25.618272383608222],
      },
  ];
  const shluzi2 = [
    {
        data: { content: 'Рагодощ' },
        options: { selectOnClick: false },
        coords: [52.02362697626581,25.473051949072907],
      },
  ];
  const shluzi3 = [
    {
        data: { content: 'Овзичи' },
        options: { selectOnClick: false },
        coords: [ 52.02152221122735,25.32882365609734 ],
      },
  ];
  const shluzi4 = [
    {
        data: { content: 'Ляховичи' },
        options: { selectOnClick: false },
        coords: [52.054695905746776,25.11818810112421 ],
      },
  ];
  const shluzi5 = [
    {
        data: { content: 'Кобрин ' },
        options: { selectOnClick: false },
        coords: [52.212291374599594,24.40015939064817 ],
      },
  ];
  const shluzi6 = [
    {
        data: { content: 'Залузье' },
        options: { selectOnClick: false },
        coords: [ 52.19209717145824, 24.12869856317413 ],
      },
  ];
  const shluzi7 = [
    {
        data: { content: 'Новосады' },
        options: { selectOnClick: false },
        coords: [52.14174200306868,23.953378471422766 ],
      },
  ];
  const shluzi8 = [
    {
        data: { content: 'Качановичи' },
        options: { selectOnClick: false },
        coords: [52.115340977063944,26.43099095472064 ],
      },
  ];
  const shluzi9 = [
    {
        data: { content: 'Стахово' },
        options: { selectOnClick: false },
        coords: [52.1145708354395,26.73653779807566],
      },
  ];
  const shluzi10 = [
    {
        data: { content: 'Кужинец' },
        options: { selectOnClick: false },
        coords: [53.86098867655197, 23.529203414363742],
      },
  ];
  const shluzi11 = [
    {
        data: { content: 'Волкушек' },
        options: { selectOnClick: false },
        coords: [53.859218027113464,23.54944982536068],
      },
  ];
  const shluzi12 = [
    {
        data: { content: 'Домбровка' },
        options: { selectOnClick: false },
        coords: [53.86273627453725,23.62412418815228],
      },
  ];
  const shluzi13 = [
    {
        data: { content: 'Витебская ГЭС' },
        options: { selectOnClick: false },
        coords: [55.24987779259909, 30.161581595525785],
      }
  ];
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
// function Shluzi () {
    class Shluzi extends React.Component{
        state = mapState;
    
        onItemClick = coords => {
          this.setState({ center: coords, zoom: 15 });
        };
    
        render (){
return ( <div className="grid-container987">
<div className="shl1" style={{ height: 670, width: '100%'}}>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Местоположение на реке(канале)</b></TableCell>
            <TableCell align="center"><b>Год ввода в эксплуатацию</b></TableCell>
            <TableCell align="center"><b>Количество камер,шт</b> </TableCell>
            <TableCell align="center"><b>Длина камеры между устоями(полезная), м</b></TableCell>
            <TableCell align="center"><b>Ширина камеры(пролета), м</b></TableCell>
            <TableCell align="center"><b>Напор, м</b></TableCell>
            <TableCell align="center"><b>Глубина на пороге(ВГ/НГ), м</b></TableCell>
            <TableCell align="center"><b>На карте</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell align="center">река Пина</TableCell>
              <TableCell align="center">2006</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,7</TableCell>
              <TableCell align="center">2,4</TableCell>
              <TableCell align="center">2,75/2,6</TableCell>
              <TableCell align="center"> {shluzi.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Пина</TableCell>
              <TableCell align="center">1938</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">80,0</TableCell>
              <TableCell align="center">11,26</TableCell>
              <TableCell align="center">2,1</TableCell>
              <TableCell align="center">3,9/1,76</TableCell>
              <TableCell align="center"> {shluzi1.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Днепро-Бугский канал</TableCell>
              <TableCell align="center">2019</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,9</TableCell>
              <TableCell align="center">1,8</TableCell>
              <TableCell align="center">2,75/2,5</TableCell>
              <TableCell align="center"> {shluzi2.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Днепро-Бугский канал</TableCell>
              <TableCell align="center">1941</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">78,85</TableCell>
              <TableCell align="center">11,06</TableCell>
              <TableCell align="center">1,8</TableCell>
              <TableCell align="center">3,8/2,0</TableCell>
              <TableCell align="center"> {shluzi3.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Днепро-Бугский канал</TableCell>
              <TableCell align="center">1941</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">79,8</TableCell>
              <TableCell align="center">11,1</TableCell>
              <TableCell align="center">1,9</TableCell>
              <TableCell align="center">4,1/2,17</TableCell>
              <TableCell align="center"> {shluzi4.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">Днепро-Бугский канал</TableCell>
              <TableCell align="center">2009</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,7</TableCell>
              <TableCell align="center">5,35</TableCell>
              <TableCell align="center">2,70/2,55</TableCell>
              <TableCell align="center"> {shluzi5.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">2015</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,9</TableCell>
              <TableCell align="center">2,35</TableCell>
              <TableCell align="center">2,70/2,50</TableCell>
              <TableCell align="center"> {shluzi6.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">2003</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,7</TableCell>
              <TableCell align="center">2,4</TableCell>
              <TableCell align="center">2,75/2,45</TableCell>
              <TableCell align="center"> {shluzi7.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Муховец</TableCell>
              <TableCell align="center">2011</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">120,0</TableCell>
              <TableCell align="center">12,9</TableCell>
              <TableCell align="center">1,4</TableCell>
              <TableCell align="center">2,50/2,70</TableCell>
              <TableCell align="center"> {shluzi8.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Припять</TableCell>
              <TableCell align="center">1954</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">110,0</TableCell>
              <TableCell align="center">11,93</TableCell>
              <TableCell align="center">2,2</TableCell>
              <TableCell align="center">4,4/2,2</TableCell>
              <TableCell align="center"> {shluzi9.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center"> река Припять</TableCell>
              <TableCell align="center">1956</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">110,0</TableCell>
              <TableCell align="center">12</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center"> 5,2/2,2</TableCell>
              <TableCell align="center"> {shluzi10.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center"> Августовский канал</TableCell>
              <TableCell align="center">1829</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">356,14</TableCell>
              <TableCell align="center">6,2</TableCell>
              <TableCell align="center">11,5</TableCell>
              <TableCell align="center">2,16/1.0/1.0/0.95/1.0</TableCell>
              <TableCell align="center"> {shluzi11.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center"> Августовский канал</TableCell>
              <TableCell align="center">1828-1829</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">65,5</TableCell>
              <TableCell align="center">6,18</TableCell>
              <TableCell align="center">3,3</TableCell>
              <TableCell align="center">2,1/1,1</TableCell>
              <TableCell align="center"> {shluzi12.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center"> Августовский канал</TableCell>
              <TableCell align="center">1828-1829</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">64,8</TableCell>
              <TableCell align="center">6,14</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">2,46/1,05</TableCell>
              <TableCell align="center"> {shluzi13.map(ges =>
              <Button data={ges.data}
              options={ges.options}
              onClick={() => this.onItemClick(ges.coords)}
               key={ges.data.content}>
            Показать
             </Button>)}</TableCell>
            </TableRow>
            <TableRow
            >
              <TableCell align="center">река Западная Двина</TableCell>
              <TableCell align="center">2017</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">94,0</TableCell>
              <TableCell align="center">13,5</TableCell>
              <TableCell align="center">13</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center"> {shluzi13.map(ges =>
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
    <div className="shl2">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
        <Map width = '100%' height='900px'  state={this.state}>
        {/* <SearchControl options={{
        float: 'right'
         }}  /> */}
  <Placemark geometry={[53.86787265066873,23.757951423339804]} properties={{balloonContentBody: [
       "Габариты сооружения: <br> Длина камеры между устоями (полезная): 356.14м <br> Ширина камеры, (пролета): 6.2м <br> Напор: 11.5м <br> Глубина на пороге (ВГ/НГ): 2,16/1,0/1,0/0,95/1,0м <br><i> Описание: Расположен на 3 км Августовского <br> канала от реки Нёман. </i> <br>",
      ]} }
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/images/Шлюзы.png',
        iconImageSize: [30, 30],
        // iconImageOffset: [-15, -35],
        // // iconContentOffset: [25, 25],
                }} />
      <Placemark geometry={[53.859218027113464,23.54944982536068]} 
          properties={{balloonContentBody:[ "Волкушек.Габариты сооружения: <br> Длина камеры между устоями (полезная): 64.8м <br> Ширина камеры, (пролета): 6.14м <br> Напор: 4м <br> Глубина на пороге (ВГ/НГ): 2,46/1,05м <br><i> Описание: Расположен на 18 км Августовского <br> канала от реки Нёман. </i> <br>",
           ]}}
           options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Шлюзы.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
      <Placemark geometry={[53.86273627453725,23.62412418815228]} 
             properties={{balloonContentBody:[ "Домбровка.Габариты сооружения: <br> Длина камеры между устоями (полезная): 65.5м <br> Ширина камеры, (пролета): 6.18м <br> Напор: 3.3м <br> Глубина на пороге (ВГ/НГ): 2,1/1,1м <br><i> Описание: Расположен на 13 км Августовского <br> канала от реки Нёман. </i> <br> ",
             ]}}         
             options={{
              iconLayout: 'default#image',
              iconImageHref: '/images/Шлюзы.png',
              iconImageSize: [30, 30],
              // iconImageOffset: [-15, -35],
              // // iconContentOffset: [25, 25],
                      }} />
      <Placemark geometry={[52.07921035234239,25.774520989519985]} 
           properties={{balloonContentBody:[ " шлюз в д. Дубой .Габариты сооружения: <br> Длина камеры между устоями (полезная): 120м <br> Ширина камеры, (пролета): 12.7м <br> Напор: 2.4м <br> Глубина на пороге (ВГ/НГ): 2,75/2,6м",
           ]}}           
           options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Шлюзы.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
      <Placemark geometry={[52.03550325192842,25.618272383608222]} 
               properties={{balloonContentBody:[ "шлюз в д. Переруб . Габариты сооружения: <br> Длина камеры между устоями (полезная): 80м <br> Ширина камеры, (пролета): 11.26м <br> Напор: 2.10м <br> Глубина на пороге (ВГ/НГ): 3,9/1,76м",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Шлюзы.png',
                iconImageSize: [30, 30],
                // iconImageOffset: [-15, -35],
                // // iconContentOffset: [25, 25],
                        }} />
      <Placemark geometry={[52.02362697626581,25.473051949072907]} 
              properties={{balloonContentBody:[ " шлюз в Рагодощ. Габариты сооружения: <br> Длина камеры между устоями (полезная): 79,95м <br> Ширина камеры, (пролета): 11.10м <br> Напор: 1,8м <br> Глубина на пороге (ВГ/НГ): 3,85/1,95м",]}}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Шлюзы.png',
                iconImageSize: [30, 30],
                // iconImageOffset: [-15, -35],
                // // iconContentOffset: [25, 25],
                        }}/>
      <Placemark geometry={[52.02152221122735,25.32882365609734]} 
              properties={{balloonContentBody:[ "Овзичи.Габариты сооружения: <br> Длина камеры между устоями (полезная): 78,85м <br> Ширина камеры, (пролета): 11.06м <br> Напор: 1.8м <br> Глубина на пороге (ВГ/НГ): 3,8/2,0м <br>  ",]}}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Шлюзы.png',
                iconImageSize: [30, 30],
                // iconImageOffset: [-15, -35],
                // // iconContentOffset: [25, 25],
                        }} />
      <Placemark geometry={[52.054695905746776,25.11818810112421]} 
              properties={{balloonContentBody:[ " Ляховичи. Габариты сооружения: <br> Длина камеры между устоями (полезная): 79,80м <br> Ширина камеры, (пролета): 11.10м <br> Напор: 1.9м <br> Глубина на пороге (ВГ/НГ): 4,1/2,17м",]}}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Шлюзы.png',
                iconImageSize: [30, 30],
                // iconImageOffset: [-15, -35],
                // // iconContentOffset: [25, 25],
                        }} />
      <Placemark geometry={[52.212291374599594,24.40015939064817]} 
              properties={{balloonContentBody:[ "Кобрин.Габариты сооружения: <br> Длина камеры между устоями (полезная): 120м <br> Ширина камеры, (пролета): 12.7м <br> Напор: 5.35м <br> Глубина на пороге (ВГ/НГ): 2,7/2,55м <br>",
          ]}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Шлюзы.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
      <Placemark geometry={[52.19209717145824, 24.12869856317413]} 
              properties={{ balloonContentBody:[ "Залузье.Габариты сооружения: <br> Длина камеры между устоями (полезная): 120м <br> Ширина камеры, (пролета): 12.9м <br> Напор: 2.35м <br> Глубина на пороге (ВГ/НГ): 2,7/2,5м",
      ]}}
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/images/Шлюзы.png',
        iconImageSize: [30, 30],
        // iconImageOffset: [-15, -35],
        // // iconContentOffset: [25, 25],
                }} />
      <Placemark geometry={[52.14174200306868,23.953378471422766]}
             properties={{balloonContentBody:[ "Новосады. Габариты сооружения: <br> Длина камеры между устоями (полезная): 120м <br> Ширина камеры, (пролета): 12.7м <br> Напор: 2.4м <br> Глубина на пороге (ВГ/НГ): 2,75/2,45м",
      ]}}
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/images/Шлюзы.png',
        iconImageSize: [30, 30],
        // iconImageOffset: [-15, -35],
        // // iconContentOffset: [25, 25],
                }} />
      <Placemark geometry={[52.09154516854196,23.748382600832567]}
              properties={{balloonContentBody:[ "Габариты сооружения: <br> Длина камеры между устоями (полезная): 120м <br> Ширина камеры, (пролета): 12.9м <br> Напор: 1.4м <br> Глубина на пороге (ВГ/НГ): 2,5/2,7м <br> ",
      ]}}
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/images/Шлюзы.png',
        iconImageSize: [30, 30],
        // iconImageOffset: [-15, -35],
        // // iconContentOffset: [25, 25],
                }} />
      <Placemark geometry={[52.115340977063944,26.43099095472064]}
             properties={{balloonContentBody:[ "Качановичи.Габариты сооружения: <br> Длина камеры между устоями (полезная): 110м <br> Ширина камеры, (пролета): 11.93м <br> Напор: 2.2м <br> Глубина на пороге (ВГ/НГ): 4,4/2,2м",
     ]}} 
     options={{
      iconLayout: 'default#image',
      iconImageHref: '/images/Шлюзы.png',
      iconImageSize: [30, 30],
      // iconImageOffset: [-15, -35],
      // // iconContentOffset: [25, 25],
              }} />
      <Placemark geometry={[52.1145708354395,26.73653779807566]} 
               properties={{balloonContentBody:[ "Стахово. Габариты сооружения: <br> Длина камеры между устоями (полезная): 110м <br> Ширина камеры, (пролета): 12м <br> Напор: 3м <br> Глубина на пороге (ВГ/НГ): 5,2/2,2м",
      ]}}
      options={{
      iconLayout: 'default#image',
      iconImageHref: '/images/Шлюзы.png',
      iconImageSize: [30, 30],
      // iconImageOffset: [-15, -35],
      // // iconContentOffset: [25, 25],
              }} />
      <Placemark geometry={[55.24987779259909, 30.161581595525785]} 
         options={{
          iconLayout: 'default#image',
          iconImageHref: '/images/Шлюзы.png',
          iconImageSize: [30, 30],
          // iconImageOffset: [-15, -35],
          // // iconContentOffset: [25, 25],
                  }} />
      <Placemark geometry={[55.25153362223599, 30.15994864258706]} 
           properties={{balloonContentBody:[ "Витебская ГЭС <br></br>Год ввода в эксплуатацию: 2016-2017 <br> Река (канал): река Западная Двина <br> Установленная мощность, МВт: 40 <br> Собственник: Белэнерго"
          ]}}     
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/Шлюзы.png',
            iconImageSize: [30, 30],
            // iconImageOffset: [-15, -35],
            // // iconContentOffset: [25, 25],
                    }} />
      <Placemark geometry={[53.86098867655197, 23.529203414363742]} 
            properties={{balloonContentBody:[ "Кужинец.Габариты сооружения: <br> Длина камеры между устоями (полезная): 11.7м <br> Ширина камеры, (пролета): 6м <br> Напор: 2.8м <br> <i>Описание:  Расположен на 20 км Августовского <br> канала от реки Нёман </i> <br> " ,
       ]}}
       options={{
        iconLayout: 'default#image',
        iconImageHref: '/images/Шлюзы.png',
        iconImageSize: [30, 30],
        // iconImageOffset: [-15, -35],
        // // iconContentOffset: [25, 25],
                }} />
       <SearchControl options={{
        float: 'right'
         }}  />
       </Map>
      </YMaps>
      </div>

{/* <div><b className="name18">Технические характеристики судоходных шлюзов на внутренних водных путях Республики Беларусь  </b></div>
<div className="content56">
<button className="btn56"><a>
    <b>Дубой</b><br></br>
    Местоположение на реке(канале): река Пина<br></br>
    Год ввода в эксплуатацию: 2006<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,7<br></br>
    Напор, м: 2,4<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,75/2,6<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Переруб</b><br></br>
    Местоположение на реке(канале): река Пина<br></br>
    Год ввода в эксплуатацию: 1938<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 80,0<br></br>
    Ширина камеры(пролета), м: 11,26<br></br>
    Напор, м: 2,1<br></br>
    Глубина на пороге(ВГ/НГ), м: 3,9/1,76<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Рагодощ</b><br></br>
    Местоположение на реке(канале): Днепро-Бугский канал<br></br>
    Год ввода в эксплуатацию: 2019<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,9<br></br>
    Напор, м: 1,8<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,75/2,5<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Овзичи</b><br></br>
    Местоположение на реке(канале): Днепро-Бугский канал<br></br>
    Год ввода в эксплуатацию: 1941<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 78,85<br></br>
    Ширина камеры(пролета), м: 11,06<br></br>
    Напор, м: 1,8<br></br>
    Глубина на пороге(ВГ/НГ), м: 3,8/2,0<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Ляховичи</b><br></br>
    Местоположение на реке(канале): Днепро-Бугский канал<br></br>
    Год ввода в эксплуатацию: 1941<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 79,8<br></br>
    Ширина камеры(пролета), м: 11,1<br></br>
    Напор, м: 1,9<br></br>
    Глубина на пороге(ВГ/НГ), м: 4,1/2,17<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Кобрин</b><br></br>
    Местоположение на реке(канале): Днепро-Бугский канал<br></br>
    Год ввода в эксплуатацию: 2009<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,7<br></br>
    Напор, м: 5,35<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,70/2,55<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Залузье</b><br></br>
    Местоположение на реке(канале): река Муховец<br></br>
    Год ввода в эксплуатацию: 2015<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,9<br></br>
    Напор, м: 2,35<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,70/2,50<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Новосады</b><br></br>
    Местоположение на реке(канале): река Муховец<br></br>
    Год ввода в эксплуатацию: 2003<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,7<br></br>
    Напор, м: 2,4<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,75/2,45<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Тришин</b><br></br>
    Местоположение на реке(канале): река Муховец<br></br>
    Год ввода в эксплуатацию: 2011<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 120,0<br></br>
    Ширина камеры(пролета), м: 12,9<br></br>
    Напор, м: 1,4<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,50/2,70<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Качановичи</b><br></br>
    Местоположение на реке(канале): река Припять<br></br>
    Год ввода в эксплуатацию: 1954<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 110,0<br></br>
    Ширина камеры(пролета), м: 11,93<br></br>
    Напор, м: 2,2<br></br>
    Глубина на пороге(ВГ/НГ), м: 4,4/2,2<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Стахово</b><br></br>
    Местоположение на реке(канале): река Припять<br></br>
    Год ввода в эксплуатацию: 1956<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 110,0<br></br>
    Ширина камеры(пролета), м: 12<br></br>
    Напор, м: 3<br></br>
    Глубина на пороге(ВГ/НГ), м: 5,2/2,2<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Немново</b><br></br>
    Местоположение на реке(канале): Августовский канал<br></br>
    Год ввода в эксплуатацию: 1829<br></br>
    Количество камер,шт: 4<br></br>
    Длина камеры между устоями(полезная), м: 356,14<br></br>
    Ширина камеры(пролета), м: 6,2<br></br>
    Напор, м: 11,5<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,16/1.0/1.0/0.95/1.0<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Домбровка</b><br></br>
    Местоположение на реке(канале): Августовский канал<br></br>
    Год ввода в эксплуатацию: 1828-1829<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 65,5<br></br>
    Ширина камеры(пролета), м: 6,18<br></br>
    Напор, м: 3,3<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,1/1,1<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Волкушек</b><br></br>
    Местоположение на реке(канале): Августовский канал<br></br>
    Год ввода в эксплуатацию: 1828-1829<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 64,8<br></br>
    Ширина камеры(пролета), м: 6,14<br></br>
    Напор, м: 4<br></br>
    Глубина на пороге(ВГ/НГ), м: 2,46/1,05<br></br>
    </a></button>
    <button className="btn56"><a>
    <b>Шлюз Витебской ГЭС</b><br></br>
    Местоположение на реке(канале): река Западная Двина<br></br>
    Год ввода в эксплуатацию: 2017<br></br>
    Количество камер,шт: 1<br></br>
    Длина камеры между устоями(полезная), м: 94,0<br></br>
    Ширина камеры(пролета), м: 13,5<br></br>
    Напор, м: 13<br></br>
    Глубина на пороге(ВГ/НГ), м: -<br></br>
    </a></button>
</div> */}
</div>


)
        }
}

export default Shluzi;