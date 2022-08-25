import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Mogilev from './level/placelevel/dnepr/Mogilev';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function PopupZLob() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      Показать
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
       <Box sx={{ minWidth: 800 }}>
       <iframe width="775" height="430" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-3e2x4d0C-mqG3bMRbwZ5ITYyjgbI8U1yqQ_WTu0gGNEUbQd69O79eTkxgTJodty6t8LyaxpGwcBL/pubchart?oid=1493020273&amp;format=interactive"></iframe>
       </Box>
      </Popover>
    </div>
  );
}