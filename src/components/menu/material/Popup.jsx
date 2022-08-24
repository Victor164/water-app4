import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Mogilev from './level/placelevel/dnepr/Mogilev';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function Popup() {
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
       <iframe width="708" height="438" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQomXHlZ-bL-iZCJfJ7sPf1SZPQBLYy7d1GnIz_zXDg9_1KAZc0kO9E5rTQj1V4SxqKyoAL05O2eTuH/pubchart?oid=1504555600&amp;format=interactive"></iframe>
       </Box>
      </Popover>
    </div>
  );
}