import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup , Collapse } from "@mui/material";

export default function Popup1Korobe() {
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
       <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Название реки</b></TableCell>
                    <TableCell align="center"><b>Расстояние от устья, км</b></TableCell>
                    <TableCell align="center"><b>Площадь водосбора</b></TableCell>
                    <TableCell align="center"><b>Открыт</b></TableCell>
                    <TableCell align="center"><b>Закрыт</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                      <TableCell align="center" >Припять</TableCell>
                      <TableCell align="center" >- </TableCell>
                      <TableCell align="center"> - </TableCell>
                      <TableCell align="center"> - </TableCell>
                      <TableCell align="center">действует</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
       </Box>
      </Popover>
    </div>
  );
}