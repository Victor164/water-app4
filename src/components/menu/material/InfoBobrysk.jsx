import React, {useState} from "react"
import { IconButton, Table, TableContainer,TableRow,TableCell,TableHead,TableBody, ButtonGroup , Collapse } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function InfoBobrysk () {
    const [open, setOpen] = React.useState(false);

return(
<div>
<IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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
                      <TableCell align="center" >Березина</TableCell>
                      <TableCell align="center" >167</TableCell>
                      <TableCell align="center">20300</TableCell>
                      <TableCell align="center">13.11.1876</TableCell>
                      <TableCell align="center">действует</TableCell>
                    </TableRow>
                </TableBody>
              </Table>

            </Box>
          </Collapse>
</div>
)

}

export default InfoBobrysk