import React from "react"
//import './Menu.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login () {
return ( <div className="sib">
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    </Box>
<form class="form-1">
    <p>
    <TextField id="outlined-basic" label="Логин" variant="outlined" />
    </p>
        <p>
        <TextField id="outlined-basic" label="Пароль" variant="outlined" />
    </p>      
    <p className="button">
        <Button variant="contained" href="/form">Войти</Button>
    </p>
</form>
</div>
)
}

export default Login;