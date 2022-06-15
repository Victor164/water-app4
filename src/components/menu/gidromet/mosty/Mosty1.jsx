import React from "react"
import './Mosty1.css';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter,ruRU} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox, Button,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
// function QuickSearchToolbar() {
//     return (
//       <Box
//         sx={{
//           p: 0.5,
//           pb: 0,
//         }}
//       >
//         <GridToolbarQuickFilter />
//       </Box>
//     );
//   }
//   const getApplyFilterFnSameYear = (value) => {
//     if (!value || value.length !== 4 || !/\d{4}/.test(value)) {
//       return null;
//     }
//     return (params) => {
//       return params.value.getFullYear() === Number(value);
//     };
//   };
const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);
CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

  const columns = [
    {
      field: 'namem',
      headerName: 'Наименование моста',
      width: 250,
    },
    {
      field: 'typem',
      headerName: 'Тип моста',
      width: 150,
    },
    {
      field: 'riverm',
      headerName: 'Река (канал)',
      width: 150,
    },
    {
      field: 'postm',
      headerName: 'Водомерный пост',
      width: 200
    }
  ];
  const rows= [
    { id: 1, namem: 'Днепр-мост1-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Лоев'},
    { id: 2, namem: 'Днепр-мост2-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Лоев'},
    { id: 3, namem: 'р.Днепр-мост3-авто(новый)',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Речица'},
    { id: 4, namem: 'р.Днепр-мост4-авто(старый)',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Речица'},
    { id: 5, namem: 'р.Днепр-мост5-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Речица'},
    { id: 6, namem: 'р.Днепр-мост6-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Жлобин'},
    { id: 7, namem: 'р.Днепр-мост7-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Жлобин'},
    { id: 8, namem: 'р.Днепр-мост8-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Жлобин'},
    { id: 9, namem: 'р.Днепр-мост9-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Жлобин'},
    { id: 10, namem: 'р.Днепр-мост10-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 11, namem: 'р.Днепр-мост11-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 12, namem: 'р.Днепр-мост12-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 13, namem: 'р.Днепр-мост13-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 14, namem: 'р.Днепр-мост14-ж/д',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 15, namem: 'р.Днепр-мост15-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 16, namem: 'р.Днепр-мост16-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 17, namem: 'р.Днепр-мост17-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 18, namem: 'р.Днепр-мост18-авто',  typem: 'ж/д', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 19, namem: 'р.Днепр-мост19-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 20, namem: 'р.Днепр-мост20-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 21, namem: 'р.Днепр-мост21-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 22, namem: 'р.Днепр-мост22-авто',  typem: 'авто', riverm: 'Днепр', postm: 'г/п Могилев'},
    { id: 23, namem: 'р.Сож-мост1-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 24, namem: 'р.Сож-мост2-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 25, namem: 'р.Сож-мост3-ж/д',  typem: 'ж/д', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 26, namem: 'р.Сож-мост4-авто(старый)',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 27, namem: 'р.Сож-мост5-авто(новый)',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 28, namem: 'р.Сож-мост6-пешеходный',  typem: 'пешеходный', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 29, namem: 'р.Сож-мост7-ж/д ',  typem: 'ж/д', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 30, namem: 'р.Сож-мост8-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
    { id: 31, namem: 'р.Сож-мост9-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 32, namem: 'р.Сож-мост10-авто(понтонный)',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 33, namem: 'р.Сож-мост11-ж/д',  typem: 'ж/д', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 34, namem: 'р.Сож-мост12-авто(понтонный)',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 35, namem: 'р.Сож-мост13-авто(понтонный)',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 36, namem: 'р.Сож-мост14-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 37, namem: 'р.Сож-мост15-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 38, namem: 'р.Сож-мост16-ж/д',  typem: 'ж/д', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 39, namem: 'р.Припять-мост1-авто',  typem: 'авто', riverm: 'Припять', postm: 'г/п Мозырь'},
    { id: 40, namem: 'р.Припять-мост2-авто',  typem: 'авто', riverm: 'Припять', postm: 'г/п Мозырь'},
    { id: 41, namem: 'р.Припять-мост3-ж/д',  typem: 'ж/д', riverm: 'Припять', postm: 'г/п Мозырь'},
    { id: 42, namem: 'р.Припять-мост4-авто',  typem: 'авто', riverm: 'Припять', postm: 'г/п Черничи'},
    { id: 43, namem: 'р.Припять-мост5-авто',  typem: 'ж/д', riverm: 'Припять', postm: 'г/п Коробье'},
    { id: 44, namem: 'р.Припять-мост6-авто',  typem: 'авто', riverm: 'Припять', postm: 'г/п Пинск'},
    { id: 45, namem: 'р.Пина-мост1-авто',  typem: 'авто', riverm: 'Пина', postm: 'г/п Пинск'},
    { id: 46, namem: 'Днепровско-Букский канал-мост1-авто',  typem: 'авто', riverm: 'Днепровско-Букский канал', postm: 'г/п Пинск'},
    { id: 47, namem: 'Днепровско-Букский канал2-авто',  typem: 'авто', riverm: 'Днепровско-Букский канал', postm: 'г/п Пинск'},
    { id: 48, namem: 'Днепровско-Букский канал-мост3-авто',  typem: 'авто', riverm: 'Днепровско-Букский канал', postm: 'г/п Пинск'},
    { id: 49, namem: 'Днепровско-Букский канал-мост4-авто',  typem: 'авто', riverm: 'Днепровско-Букский канал', postm: 'г/п Пинск'},
    { id: 50, namem: 'р.Муховец-мост1-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 51, namem: 'р.Муховец-мост2-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 52, namem: 'р.Муховец-мост3-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 53, namem: 'р.Муховец-мост4-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 54, namem: 'р.Муховец-мост5-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 55, namem: 'р.Муховец-мост6-ж/д',  typem: 'ж/д', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 56, namem: 'р.Муховец-мост7-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 57, namem: 'р.Муховец-мост8-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 58, namem: 'р.Муховец-мост9-ж/д',  typem: 'ж/д', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 59, namem: 'р.Муховец-мост10-авто',  typem: 'авто', riverm: 'Муховец', postm: 'г/п Пинск'},
    { id: 60, namem: 'р.Березина-мост1-ж/д',  typem: 'ж/д', riverm: 'Березина', postm: 'г/п Светлогорск'},
    { id: 61, namem: 'р.Березина-мост2-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Светлогорск'},
    { id: 62, namem: 'р.Березина-мост3-ж/д',  typem: 'ж/д', riverm: 'Березина', postm: 'г/п Бобруйск'},
    { id: 63, namem: 'р.Березина-мост4-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Бобруйск'},
    { id: 64, namem: 'р.Березина-мост5-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Бобруйск'},
    { id: 65, namem: 'р.Березина-мост6-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Бобруйск'},
    { id: 66, namem: 'р.Березина-мост7-ж/д',  typem: 'ж/д', riverm: 'Березина', postm: 'г/п Бобруйск'},
    { id: 67, namem: 'р.Березина-мост8-ж/д',  typem: 'ж/д', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 68, namem: 'р.Березина-мост9-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 69, namem: 'р.Березина-мост10-ж/д',  typem: 'ж/д', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 70, namem: 'р.Березина-мост11-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 71, namem: 'р.Березина-мост12-пешеходный ',  typem: 'пешеходный', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 72, namem: 'р.Березина-мост13-авто',  typem: 'авто', riverm: 'Березина', postm: 'г/п Березино'},
    { id: 73, namem: 'р.Западная Двина-мост1-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 74, namem: 'р.Западная Двина-мост2-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 75, namem: 'р.Западная Двина-мост3-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 76, namem: 'р.Западная Двина-мост4-ж/д',  typem: 'ж/д', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 77, namem: 'р.Западная Двина-мост5-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 78, namem: 'р.Западная Двина-мост6-ж/д(старый)',  typem: 'ж/д', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 79, namem: 'р.Западная Двина-мост7-ж/д',  typem: 'ж/д', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 80, namem: 'р.Западная Двина-мост8-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 81, namem: 'р.Западная Двина-мост9-авто(понтонный)',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Витебск'},
    { id: 82, namem: 'р.Западная Двина-мост10-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 83, namem: 'р.Западная Двина-мост11-ж/д',  typem: 'ж/д', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 84, namem: 'р.Западная Двина-мост12-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 85, namem: 'р.Западная Двина-мост13-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 86, namem: 'р.Западная Двина-мост14-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 87, namem: 'р.Западная Двина-мост15-авто',  typem: 'авто', riverm: 'Западная Двина', postm: 'г/п Полоцк'},
    { id: 88, namem: 'р.Нёман-мост1-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 89, namem: 'р.Нёман-мост2-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 90, namem: 'р.Нёман-мост3-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 91, namem: 'р.Нёман-мост4-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 92, namem: 'р.Нёман-мост5-ж/д',  typem: 'ж/д', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 93, namem: 'р.Нёман-мост6-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 94, namem: 'р.Нёман-мост7-авто',  typem: 'авто', riverm: 'Неман', postm: 'г/п Гродно'},
    { id: 95, namem: 'Августовский канал-мост1-авто',  typem: 'авто', riverm: 'Августовский канал', postm: 'г/п Гродно'},
    { id: 96, namem: 'Августовский канал-мост2-авто',  typem: 'авто', riverm: 'Августовский канал', postm: 'г/п Гродно'},
    { id: 97, namem: 'Августовский канал-мост3-авто',  typem: 'авто', riverm: 'Августовский канал', postm: 'г/п Гродно'},
    { id: 98, namem: 'р.Горынь-мост1-авто',  typem: 'авто', riverm: 'Горынь', postm: 'г/п ст.Горынь'},
    
  ];
  const mostys = [
    {
      data: { content: 'Днепр-мост1-авто' },
      options: { selectOnClick: false },
      coords: [51.393809027778, 30.639505222222],
    },
    {
      data: { content: 'Днепр-мост2-ж/д' },
      options: { selectOnClick: false },
      coords: [51.499620888889, 30.584803722222],
    },
    {
      data: { content: 'Днепр-мост3-авто(новый)' },
      options: { selectOnClick: false },
      coords: [52.323113333333, 30.526726583333],
    },
    {
      data: { content: 'Днепр-мост4-авто(старый)' },
      options: { selectOnClick: false },
      coords: [52.323211694444, 30.526200861111],
    },
    {
      data: { content: 'Днепр-мост5-ж/д' },
      options: { selectOnClick: false },
      coords: [52.359235277778, 30.4472],
    },
    {
      data: { content: 'Днепр-мост6-ж/д' },
      options: { selectOnClick: false },
      coords: [52.363971805556, 30.072125388889],
    },
    {
      data: { content: 'Днепр-мост7-ж/д' },
      options: { selectOnClick: false },
      coords: [52.888925166667, 30.060618666667],
    },
    {
      data: { content: 'Днепр-мост8-авто' },
      options: { selectOnClick: false },
      coords: [52.928034805556, 30.045229694444],
    },
    {
      data: { content: 'Днепр-мост9-ж/д' },
      options: { selectOnClick: false },
      coords: [53.074164138889, 30.058307444444],
    },
    {
      data: { content: 'Днепр-мост10-авто' },
      options: { selectOnClick: false },
      coords: [53.518491861111, 30.269418055556],
    },
    {
      data: { content: 'Днепр-мост11-авто' },
      options: { selectOnClick: false },
      coords: [53.884978027778, 30.311215444444],
    },
    {
      data: { content: 'Днепр-мост12-авто' },
      options: { selectOnClick: false },
      coords: [53.892089138889, 30.329689444444],
    },
    {
      data: { content: 'Днепр-мост13-авто' },
      options: { selectOnClick: false },
      coords:  [53.891081027778, 30.375246583333],
    },
    {
      data: { content: 'Днепр-мост14-ж/д' },
      options: { selectOnClick: false },
      coords:  [53.894483861111, 30.381718138889],
    },
    {
      data: { content: 'Днепр-мост15-авто' },
      options: { selectOnClick: false },
      coords:   [53.980599916667, 30.394774222222],
    },
    {
      data: { content: 'Днепр-мост16-авто' },
      options: { selectOnClick: false },
      coords:   [54.206384777778, 30.306852083333],
    },
    {
      data: { content: 'Днепр-мост17-авто' },
      options: { selectOnClick: false },
      coords:    [54.319525222222, 30.281170083333],
    },
    {
      data: { content: 'Днепр-мост18-ж/д' },
      options: { selectOnClick: false },
      coords:    [54.480893638889, 30.399099833333],
    },
    {
      data: { content: 'Днепр-мост19-авто' },
      options: { selectOnClick: false },
      coords: [54.4913375,30.408552666667],
    },
    {
      data: { content: 'Днепр-мост20-авто' },
      options: { selectOnClick: false },
      coords: [54.506720305556,30.429377111111],
    },
    {
      data: { content: 'Днепр-мост21-авто' },
      options: { selectOnClick: false },
      coords:   [54.544871694444,30.464517833333],
    },
    {
      data: { content: 'Днепр-мост22-авто' },
      options: { selectOnClick: false },
      coords:   [54.57570325,30.680253555556],
    },
    {
      data: { content: 'Сож-мост1-авто' },
      options: { selectOnClick: false },
      coords:   [52.29645425, 30.931455444444],
    },
    {
      data: { content: 'Сож-мост2-авто' },
      options: { selectOnClick: false },
      coords:   [52.384164333333, 31.001686166667],
    },
    {
      data: { content: 'Сож-мост3-ж/д' },
      options: { selectOnClick: false },
      coords: [52.410342194444,  31.008107833333],
    },
    {
      data: { content: 'Сож-мост4-авто(старый)' },
      options: { selectOnClick: false },
      coords: [52.412212916667, 31.009894194444],
    },
    {
      data: { content: 'Сож-мост5-авто(новый)' },
      options: { selectOnClick: false },
      coords:  [52.412374,  31.010172638889],
    },
    {
      data: { content: 'Сож-мост6-пешеходный' },
      options: { selectOnClick: false },
      coords:  [52.425287611111,  31.021033111111],
    },
    {
      data: { content: 'Сож-мост7-ж/д' },
      options: { selectOnClick: false },
      coords:  [ 52.453683944444,  31.076287694444],
    },
    {
      data: { content: 'Сож-мост8-авто' },
      options: { selectOnClick: false },
      coords:  [ 52.562641472222,  31.153312944444],
    },
    {
      data: { content: 'Сож-мост9-авто' },
      options: { selectOnClick: false },
      coords:  [52.88932575,  31.960311361111],
    },
    {
      data: { content: 'Сож-мост10-авто(понтонный)' },
      options: { selectOnClick: false },
      coords:  [53.125224666667, 30.867677305556],
    },
    {
      data: { content: 'Сож-мост11-ж/д' },
      options: { selectOnClick: false },
      coords:  [53.409053083333, 31.009130527778],
    },
    {
      data: { content: 'Сож-мост12-авто(понтонный)' },
      options: { selectOnClick: false },
      coords:  [53.409905277778, 31.011932444444],
    },   
    {
      data: { content: 'Сож-мост13-авто(понтонный)' },
      options: { selectOnClick: false },
      coords:  [53.42161225, 31.003829444444],
    },
    {
      data: { content: 'Сож-мост14-авто' },
      options: { selectOnClick: false },
      coords:  [53.565893222222, 31.393683888889],
    },
    {
      data: { content: 'Сож-мост15-авто' },
      options: { selectOnClick: false },
      coords:  [53.706765111111, 31.744169583333],
    },
    {
      data: { content: 'Сож-мост16-ж/д' },
      options: { selectOnClick: false },
      coords:  [53.735076666667,31.735622583333],
    },
    
  ]
  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
  // const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  class Mosty1 extends React.Component{
  state = mapState;
  

onItemClick = coords => {
  this.setState({ center: coords, zoom: 15 });
};
// function Mosty1 () {
    
    render (){
    return (<div className="tb">
      {/* <div className="tb1"></div> */}
      <div className="tb2" style={{ height: 800, width: '100%'}}>
    <DataGrid
     localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
     rows={rows}
     columns={columns}
     pageSize={20}
    //  disableColumnFilter
     disableColumnSelector
     disableDensitySelector
    //  disableSelectionOnClick
    components={{
      Toolbar: CustomToolbar,
    }}
    // componentsProps={{
    //   panel: {
    //     anchorEl: filterButtonEl,
    //   },
    //   toolbar: {
    //     setFilterButtonEl,
    //   },
    // }}
    // components={{ Toolbar: QuickSearchToolbar }}
      />
      </div>
      <div className="tb3">
      <YMaps query={{ apikey: 'c3af61e0-13a7-42ce-967f-211edbc2c15d' }}>
    <Map width = '100%' height='750px'  state={this.state}>    
       <ListBox data={{
      content: 'Мосты'
       }}>
         {mostys.map(mosty =>
          <ListBoxItem data={mosty.data}
          options={mosty.options}
          onClick={() => this.onItemClick(mosty.coords)}
          key={mosty.data.content}
         />
         )}
     </ListBox>
       <SearchControl options={{
        float: 'right'
         }}  />
         <TypeSelector options={{
      float: 'right'
    }} />
         <Placemark geometry={[51.393809027778, 30.639505222222]} 
               properties={{balloonContentBody:[ "Днепр-мост1-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
                <Placemark geometry={[51.499620888889, 30.584803722222]} 
               properties={{balloonContentBody:[ "Днепр-мост2-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
         <Placemark geometry={[52.323113333333, 30.526726583333]} 
               properties={{balloonContentBody:[ "Днепр-мост3-авто(новый)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
        <Placemark geometry={[52.323211694444, 30.526200861111]} 
               properties={{balloonContentBody:[ "Днепр-мост4-авто(старый)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
        <Placemark geometry={[52.359235277778, 30.4472]} 
               properties={{balloonContentBody:[ "Днепр-мост5-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
          <Placemark geometry={[52.363971805556, 30.072125388889]} 
               properties={{balloonContentBody:[ "Днепр-мост6-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
       <Placemark geometry={[52.888925166667, 30.060618666667]} 
               properties={{balloonContentBody:[ "Днепр-мост7-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
          <Placemark geometry={[52.928034805556, 30.045229694444]} 
               properties={{balloonContentBody:[ "Днепр-мост8-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
         <Placemark geometry={[53.074164138889, 30.058307444444]} 
               properties={{balloonContentBody:[ "Днепр-мост9-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
      <Placemark geometry={[53.518491861111, 30.269418055556]} 
               properties={{balloonContentBody:[ "Днепр-мост10-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
           <Placemark geometry={[53.884978027778, 30.311215444444]} 
               properties={{balloonContentBody:[ "Днепр-мост11-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
       <Placemark geometry={[53.892089138889, 30.329689444444]} 
               properties={{balloonContentBody:[ "Днепр-мост12-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
        <Placemark geometry={[53.891081027778, 30.375246583333]} 
               properties={{balloonContentBody:[ "Днепр-мост13-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
              <Placemark geometry={[53.894483861111, 30.381718138889]} 
               properties={{balloonContentBody:[ "Днепр-мост14-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
        <Placemark geometry={[53.980599916667, 30.394774222222]} 
               properties={{balloonContentBody:[ "Днепр-мост15-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
               <Placemark geometry={ [54.206384777778, 30.306852083333]} 
               properties={{balloonContentBody:[ "Днепр-мост16-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
           <Placemark geometry={ [54.319525222222, 30.281170083333]} 
               properties={{balloonContentBody:[ "Днепр-мост17-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
            <Placemark geometry={ [54.480893638889, 30.399099833333]} 
               properties={{balloonContentBody:[ "Днепр-мост18-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
              <Placemark geometry={[54.4913375,30.408552666667]} 
               properties={{balloonContentBody:[ "Днепр-мост19-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
             <Placemark geometry={[54.506720305556,30.429377111111]} 
               properties={{balloonContentBody:[ "Днепр-мост20-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
      <Placemark geometry={[54.544871694444,30.464517833333]} 
               properties={{balloonContentBody:[ "Днепр-мост21-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
              <Placemark geometry={ [54.57570325,30.680253555556]} 
               properties={{balloonContentBody:[ "Днепр-мост22-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
                 <Placemark geometry={[52.29645425, 30.931455444444]} 
               properties={{balloonContentBody:[ "Сож-мост1-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
       <Placemark geometry={ [52.384164333333, 31.001686166667]} 
               properties={{balloonContentBody:[ "Сож-мост2-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
         <Placemark geometry={ [52.410342194444,  31.008107833333]} 
               properties={{balloonContentBody:[ "Сож-мост3-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
              <Placemark geometry={ [52.412212916667, 31.009894194444]} 
               properties={{balloonContentBody:[ "Сож-мост4-авто(старый)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
          <Placemark geometry={ [52.412374,  31.010172638889]} 
               properties={{balloonContentBody:[ "Сож-мост5-авто(новый)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
      <Placemark geometry={ [52.425287611111,  31.021033111111]} 
               properties={{balloonContentBody:[ "Сож-мост6-пешеходный",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
    <Placemark geometry={ [ 52.453683944444,  31.076287694444]} 
               properties={{balloonContentBody:[ "Сож-мост7-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
             <Placemark geometry={[52.562641472222,  31.153312944444]} 
               properties={{balloonContentBody:[ "Сож-мост8-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
           <Placemark geometry={[52.88932575,  31.960311361111]} 
               properties={{balloonContentBody:[ "Сож-мост9-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
           <Placemark geometry={[53.125224666667, 30.867677305556]} 
               properties={{balloonContentBody:[ "Сож-мост10-авто(понтоннный)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
         <Placemark geometry={ [53.409053083333, 31.009130527778]} 
               properties={{balloonContentBody:[ "Сож-мост11-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
               <Placemark geometry={ [53.409905277778, 31.011932444444]} 
               properties={{balloonContentBody:[ "Сож-мост12-авто(понтоннный)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
                <Placemark geometry={ [53.42161225, 31.003829444444]} 
               properties={{balloonContentBody:[ "Сож-мост13-авто(понтоннный)",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
             <Placemark geometry={ [53.565893222222, 31.393683888889]} 
               properties={{balloonContentBody:[ "Сож-мост14-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
           <Placemark geometry={ [53.706765111111, 31.744169583333]} 
               properties={{balloonContentBody:[ "Сож-мост15-авто",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
            <Placemark geometry={ [53.735076666667,31.735622583333]} 
               properties={{balloonContentBody:[ "Сож-мост16-ж/д",]}}           
               options={{
                iconLayout: 'default#image',
                iconImageHref: '/images/Мосты.png',
                iconImageSize: [30, 30],
         }} />
        </Map> 
        </YMaps>
      </div>
   </div>
    )
}
  }
export default Mosty1;