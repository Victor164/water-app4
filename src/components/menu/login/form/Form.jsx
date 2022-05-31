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
import Gidropost from './tabmenu/Gidropost';
import Limitperekat from './tabmenu/Limitperekat';
import Gidroyzli from './tabmenu/Gidroyzli';
import Mosty from './tabmenu/Mosty';


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

export default function Form() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( <div>
      <a href='/login'>Выйти</a>
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
        <Tab label="Уровень" {...a11yProps(0)} />
        <Tab label="Глубина" {...a11yProps(1)} />
        <Tab label="Подмостковые габариты" {...a11yProps(2)} />
        <Tab label="Дислокация технического флота" {...a11yProps(3)} />
        <Tab label="Уведомления" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Gidropost/>
      <Gidroyzli/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Limitperekat/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Mosty/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      Флот
      </TabPanel>
      <TabPanel value={value} index={4}>
      Уведомления
      </TabPanel>
    </Box>
    </div>
  );
}

