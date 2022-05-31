import React, { useState } from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import "./Login.css";
import Form from "./form/Form";


// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: "", password:"", authflag:1 };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         }
        
//         handleChange(event) {
//         this.setState({ username: event.state.username, password: event.state.password });
//         }
//         handleSubmit(event) {
//         event.preventDefault();
//         if (this.state.username == 'admin@littech.in' && this.state.password == 'secret' ) {
//             this.props.history.push("/form");
//         } else {
//         alert('Неверные данные');
//         }
//         }
//      render(){
// return ( <div className="sib">
//      <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//     </Box>
// <form onSubmit={this.handleSubmit} >
//     <p>
//     <TextField id="login" label="Логин"  variant="outlined" name="username"  value={this.state.username} onChange={(event) =>
// this.setState({
// [event.target.name]: event.target.value,
// })
// }
// required
// autoFocus />
//     </p>
//         <p>
//         <TextField id="password" label="Пароль" variant="outlined" name="password" value={this.state.password} onChange={(event) =>
// this.setState({
// [event.target.name]: event.target.value,
// })
// }
// required/>
//     </p>      
//     <p className="button">
//         <Button variant="contained" >Войти</Button>
//     </p>
// </form>
// </div>
//       )
//     }
// }
// export default Login;



function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isSubmitted3, setIsSubmitted3] = useState(false);


 
  const database = [
    {
      username: "admin",
      password: "123"
    }
  ];
  const database1 = [
    {
      username: "bugskoe",
      password: "11"
    }
  ];
  const database2 = [
    {
      username: "berezenskoe",
      password: "1234"
    }
  ];
  const database3 = [
    {
      username: "dvinskoe",
      password: "111"
    }
  ];

  const errors = {
    uname: "неправильный логин",
    pass: "неправильный пароль"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
    const userData1 = database1.find((user) => user.username === uname.value);
   
    if (userData1) {
      if (userData1.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted1(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
    const userData2 = database2.find((user) => user.username === uname.value);
   
    if (userData2) {
      if (userData2.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted2(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
    const userData3 = database3.find((user) => user.username === uname.value);
   
    if (userData3) {
      if (userData3.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted3(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Логин </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Пароль </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Войти"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        {isSubmitted ? <div>Верные данные, <a href="/adminform">Войти</a></div> : renderForm && 
        isSubmitted1 ? <div>Верные данные, <a href="/formbug">Войти</a></div> : renderForm &&
        isSubmitted2 ? <div>Верные данные, <a href="/formberez">Войти</a></div> : renderForm &&
        isSubmitted3 ? <div>Верные данные, <a href="/formdvinsk">Войти</a></div> : renderForm} 
      </div>
 
    </div>
  );
}

export default Login;

