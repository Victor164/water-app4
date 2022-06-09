import React from "react"
import './Mosty1.css';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
      // If the value is not a 4 digit string, it can not be a year so applying this filter is useless
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
      headerName: 'Водомерный пост и отметка уровня, от которого ведется отчет (м)',
      width: 450,
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
    { id: 25, namem: 'р.Сож-мост3-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Гомель'},
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
    { id: 38, namem: 'р.Сож-мост15-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 39, namem: 'р.Сож-мост15-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},
    { id: 40, namem: 'р.Сож-мост15-авто',  typem: 'авто', riverm: 'Сож', postm: 'г/п Славгород'},

  ];

function Mosty1 () {
    const [filterButtonEl, setFilterButtonEl] = React.useState(null);
    return (<div className="tb">
      <div style={{ height: 630, width: '100%'}}>
    <DataGrid
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
   </div>
    )
}

export default Mosty1;