import * as React from 'react';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columns = [
  {
    field: 'title',
    headerName: 'Наименование рек и гидрологических постов',
    width:330,
    editable: true,
  },
  {
    field: 'level',
    headerName: 'Уровень воды,см',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'Прибыло / Убыло',
    type: 'number',
    width: 150,
    editable: true,
  },
];
const rows = [
  { id: 1, title: 'р. Днепр', level: null, size: null },
  { id: 2, title: 'Могилёв', level: '123', size: 42 },
  { id: 3, title: 'Жлобин', level: '319', size: 45 },
  { id: 4, title: 'Речица', level: '357', size: 16 },
  { id: 5, title: 'Лоев', level: '476', size: null },
  { id: 6, title: 'р. Березина', level: null, size: null },
  { id: 7, title: 'Березино', level: null, size: null },
  { id: 8, title: 'Бобруйск', level: '128', size: 36 },
  { id: 9, title: 'Светлогорск', level: '538', size: 65 },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Глубина" {...a11yProps(0)} />
        <Tab label="Лимитирующие перекаты" {...a11yProps(1)} />
        <Tab label="Дислокация технического флота" {...a11yProps(2)} />
        <Tab label="Габариты подмостовых переходов" {...a11yProps(3)} />
        <Tab label="ХАРАКТЕРИСТИКА СУДОХОДНЫХ УСЛОВИЙ НАИБОЛЕЕ ЗАТРУДНИТЕЛЬНЫХ ПЕРЕКАТОВ И МОСТОВ" {...a11yProps(4)} />
        <Tab label="Гидропосты" {...a11yProps(5)} />
        <Tab label="Гидроузлы" {...a11yProps(6)} />
        <Tab label="Технический флот" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Container maxWidth="100">
         <div style={{ height: 610, width: '100%'}}>
      Глубина
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      <Button variant="contained">Сохранить</Button>
    </div>
     </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
      Лимитирующие перекаты
      </TabPanel>
      <TabPanel value={value} index={2}>
      Дислокация технического флота
      </TabPanel>
      <TabPanel value={value} index={3}>
      Габариты подмостовых переходов
      </TabPanel>
      <TabPanel value={value} index={4}>
      ХАРАКТЕРИСТИКА СУДОХОДНЫХ УСЛОВИЙ НАИБОЛЕЕ ЗАТРУДНИТЕЛЬНЫХ ПЕРЕКАТОВ И МОСТОВ
      </TabPanel>
      <TabPanel value={value} index={5}>
        Гидропосты
      </TabPanel>
      <TabPanel value={value} index={6}>
      Гидроузлы
      </TabPanel>
      <TabPanel value={value} index={7}>
      Технический флот
      </TabPanel>
    </Box>
  );
}





// export default function ExcelExport() {
//   return (

//   );
// }