import * as React from 'react';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Gidropostbug from './tabmenu copy/Gidropostbug';
import Gidroyzlibug from './tabmenu copy/Gidroyzlibug';
import Limitperekatbug from './tabmenu copy/Limitperekatbug';
import Mostybug from './tabmenu copy/Mostybug';


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
        <Box sx={{ p: 4 }}>
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

 function Formbug() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( <div>
      <a href='/login'>Выйти</a>
      <p>Днепробуг</p>
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
        <Tab label="Гидропосты" {...a11yProps(0)} />
        <Tab label="Гидроузлы" {...a11yProps(1)} />
        <Tab label="Лимитирующие перекаты" {...a11yProps(2)} />
        <Tab label="Мосты" {...a11yProps(3)} />
        <Tab label="Порты" {...a11yProps(4)} />
        <Tab label="Технический флот" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Gidropostbug/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Gidroyzlibug/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Limitperekatbug/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Mostybug/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      Порты
      </TabPanel>
      <TabPanel value={value} index={5}>
      Технический флот
      </TabPanel>
    </Box>
    </div>
  );
}
export default Formbug;
