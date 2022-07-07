import React, { Component, useState, useCallback, useEffect } from "react"
//import './Menu.css';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./yved/init-firebase";
import Tablerealtimegirdopost from "../../../table/Tablerealtimegirdopost";
import Tablerealtime from "../../../table/Tablerealtime";



// function CustomToolbar() {
//     return (
//       <GridToolbarContainer>
//         <GridToolbarExport />
//       </GridToolbarContainer>
//     );
//   }
//   const columns = [
//     {
//       field: 'title',
//       headerName: 'Наименование рек и гидрологических постов',
//       width:330,
//       editable: true,
//     },
//     {
//       field: 'level0',
//       headerName: 'Уровень воды над 0,см',
//       type: 'number',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'levelPP',
//       headerName: 'Уровень воды над проектным горизонтом,см',
//       type: 'number',
//       width: 250,
//       editable: true,
//     },
//     {
//       field: 'size',
//       headerName: 'Прибыло / Убыло',
//       type: 'number',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'temp',
//       headerName: 'Температура',
//       type: 'number',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'led',
//       headerName: 'Ледовые явления',
//       width: 150,
//       editable: true,
//     }
//   ];
//   const rows = [
//     { id: 1, title: 'р. Днепр'},
//     { id: 2, title: 'Могилёв', level0: '123', levelPP:'123', size: 42, temp: null, led:null },
//     { id: 3, title: 'Жлобин', level0: '123', levelPP:'123', size: 42, temp: null, led:null  },
//     { id: 4, title: 'Речица', level0: '123', levelPP:'123', size: 42, temp: null, led:null  },
//     { id: 5, title: 'Лоев', level0: '123', levelPP:'123', size: 42, temp: null, led:null  },
//     { id: 6, title: 'р. Березина', level: null, size: null },
//     { id: 7, title: 'Березино', level0: '123', levelPP:'123', size: 42, temp: null, led:null  },
//     { id: 8, title: 'Бобруйск', level0: '123', levelPP:'123', size: 42, temp: null, led:null },
//     { id: 9, title: 'Светлогорск', level0: '123', levelPP:'123', size: 42, temp: null, led:null  },
//   ];

const Select = props => {
  return (
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
const TextArea = props => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);
const Input = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};
const Input1 = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};
const Input2 = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};
const CheckBox = props => {
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <div className="checkbox">
        {props.options.map(option => {
          return (
            <label key={option} className="checkbox-inline">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};
const Button = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

class Gidropost extends Component {
  
constructor(props) {
  super(props);
  this.state = {date: new Date()};
  this.state = {
    newUser: {
      name: [this.state.date.toLocaleDateString() ," / ", this.state.date.toLocaleTimeString()],
      gender: "",
      name1: "",
      name2:""
    },

    genderOptions: [
    "Могилев", 
    "Жлобин", 
    "Лоев",
    "Речица"],
     genderOptions1: [
      "Березино", 
      "Бобруйск", 
      "Светлогорск"],
      genderOptions2: [
        "Светлогорск", 
        "Сож"],
      genderOptions3: [
          "Пинск", 
          "Коробье",
         "Черничи",
         "Мозырь"]
  };
  this.handleTextArea = this.handleTextArea.bind(this);
  this.handleFullName = this.handleFullName.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleClearForm = this.handleClearForm.bind(this);
  this.handleCheckBox = this.handleCheckBox.bind(this);
  this.handleInput = this.handleInput.bind(this);
  
}



handleFullName(e) {
  let value = e.target.value;
  this.setState(
    prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value
      }
    }),
    () => console.log(this.state.newUser)
  );
  
}

handleAge(e) {
  let value = e.target.value;
  this.setState(
    prevState => ({
      newUser: {
        ...prevState.newUser,
        age: value
      }
    }),
    () => console.log(this.state.newUser)
  );
}

handleInput(e) {
  let value = e.target.value;
  let name = e.target.name;
  this.setState(
    prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }),
    () => console.log(this.state.newUser)
  );
}

handleTextArea(e) {
  console.log("Inside handleTextArea");
  let value = e.target.value;
  this.setState(
    prevState => ({
      newUser: {
        ...prevState.newUser,
        about: value
      }
    }),
    () => console.log(this.state.newUser)
  );
}

handleCheckBox(e) {
  const newSelection = e.target.value;
  let newSelectionArray;

  if (this.state.newUser.skills.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.newUser.skills.filter(
      s => s !== newSelection
    );
  } else {
    newSelectionArray = [...this.state.newUser.skills, newSelection];
  }

  this.setState(prevState => ({
    newUser: { ...prevState.newUser, skills: newSelectionArray }
  }));
}

handleFormSubmit(e) {
  e.preventDefault();
  let userData = this.state.newUser;
  const levelCollRef = collection(db, 'level')
  addDoc (levelCollRef, {userData})
}

handleClearForm(e) {
  e.preventDefault();
  this.setState({
    newUser: {
      name: "",
      gender: "",
      name1: "",
      name2:""

    }
  });
}

componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
tick() {
  this.setState({
    date: new Date()
  });
}

render() {
    return ( <div >
       <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
        <Grid item xs={7}>
             <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Днепр</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидропост"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидропост"}
          handleChange={this.handleInput}
        />{" "}
          <Input
          inputType={"text"}
          title={"Дата"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Дата"}
          handleChange={this.handleInput}
        />{" "}
           <Input1
          inputType={"text"}
          title={"Уровень воды над 0 граф"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Уровень воды над 0 граф"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"Уровень воды над ПГ"}
          handleChange={this.handleInput}
        />{" "}
        {/* <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        /> */}

        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Почистить"}
          style={buttonStyle}
        />{" "}
        
      </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>река Березина</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидропост"}
          name={"gender"}
          options={this.state.genderOptions1}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидропост"}
          handleChange={this.handleInput}
        />{" "}
          <Input
          inputType={"text"}
          title={"Дата"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Дата"}
          handleChange={this.handleInput}
        />{" "}
        {/* <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        /> */}
       <Input1
          inputType={"text"}
          title={"Уровень воды над 0 граф"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Уровень воды над 0 граф"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"Уровень воды над ПГ"}
          handleChange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Почистить"}
          style={buttonStyle}
        />{" "}
        
      </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>река Сож</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидропост"}
          name={"gender"}
          options={this.state.genderOptions2}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидропост"}
          handleChange={this.handleInput}
        />{" "}
          <Input
          inputType={"text"}
          title={"Дата"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Дата"}
          handleChange={this.handleInput}
        />{" "}
        {/* <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        /> */}
       <Input1
          inputType={"text"}
          title={"Уровень воды над 0 граф"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Уровень воды над 0 граф"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"Уровень воды над ПГ"}
          handleChange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Почистить"}
          style={buttonStyle}
        />{" "}
        
      </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>река Припять</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Город"}
          name={"gender"}
          options={this.state.genderOptions3}
          value={this.state.newUser.gender}
          placeholder={"Выберете город"}
          handleChange={this.handleInput}
        />{" "}
          <Input
          inputType={"text"}
          title={"Дата"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Дата"}
          handleChange={this.handleInput}
        />{" "}
        {/* <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        /> */}
       <Input1
          inputType={"text"}
          title={"Уровень воды над 0 граф"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Уровень воды над 0 граф"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"Уровень воды над ПГ"}
          handleChange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Почистить"}
          style={buttonStyle}
        />{" "}
        
      </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item xs={5}>
     <Tablerealtimegirdopost/>
        </Grid>
      </Grid>
      </Box>
    </div>

    )
    }
  }


    // ( <div >
    //         <div>
    //         <Box sx={{ width: '100%'}}>
    //        <p> река Днепр</p> 
    //        {/* <Grid container spacing={2}> */}
    //        {/* <Grid item xs={3}> */}
    //        <Stack spacing={2}>
    //      <Item> <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Могилев</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Item>
        
    //     {/* <Grid item xs={3}> */}
    //     <Item>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Жлобин</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     {/* </Grid> */}
    //     {/* <Grid item xs={3}> */}
    //     </Item>
    //     <Item>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Речица</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Item>
    //     <Item>
    //     {/* </Grid> */}
    //     {/* <Grid item xs={3}> */}
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Лоев</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Item>
    //     {/* </Grid>
    //     </Grid> */}
    //     </Stack>
    //     </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Березина</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Березино</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Бобруйск</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Светлогорск</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Сож</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Славгород</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Гомель</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Припять</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Пинск</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Коробье</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Черничи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //     <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Мозырь</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Горынь</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>ст Горынь</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Западная Двина</p> 
    //        <Grid container spacing={2}>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Сураж</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Витебск</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Полоцк</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Неман</p> 
    //        <Grid container spacing={2}>
    //     <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Гродно</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Прибыло/убыло, см" variant="outlined" type="number" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
      
    
    // </div>
    // </div>

    
    export default Gidropost;