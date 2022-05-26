import React from "react"
//import './Menu.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login () {
    // const log[
    //  login == "admin",
    //  pas == "1234"
    // ]
    // const { username, password } = this.state;
    // const logIn = (username, password) => (
    //     new Promise((resolve, reject) => {
    //       if (username === 'Admin' && password === '12345') {
    //         resolve();
    //       } else {
    //         reject(new Error('Incorrect username or password.'));
    //       }
    //     })
    //   );
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
    <TextField id="login" label="Логин"  variant="outlined" />
    </p>
        <p>
        <TextField id="pas" label="Пароль" variant="outlined" />
    </p>      
    <p className="button">
        <Button variant="contained" href="/form">Войти</Button>
    </p>
</form>
</div>
)
}

export default Login;