import React, {Component} from "react"
//import './Menu.css';
// import Button from '@mui/material/Button';
import { DataGrid,GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./yved/init-firebase";
import Tablerealtimemosty from "../../../table/Tablerealtimemosty";

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

  const columns = [
    {
      field: 'mtitle',
      headerName: 'Наименование мостов',
      width:330,
      editable: true,
    },
    {
      field: 'levelm',
      headerName: 'Текущая высота пролета, м',
      type: 'number',
      width: 250,
      editable: true,
    }
  ];
  const rows= [
    { id: 1, mtitle: 'Речицкий ж/д мост ', levelm: '324'},
    { id: 2, mtitle: 'Отверницкий (старый) а/д мост',  levelm: '324'},
    { id: 3, mtitle: 'Отверницкий (новый) а/д мост ',  levelm: '324'},
    { id: 4, mtitle: 'Могилев а/д мост',  levelm: '324'},
    { id: 5, mtitle: 'Быхов а/д мост', levelm: '324'},
    { id: 6, mtitle: 'Рогачев а/д мост',  levelm: '324'},
    { id: 7, mtitle: 'Жлобин а/д мост',  levelm: '324'},
    { id: 8, mtitle: 'Жлобин ж/д мост',   levelm: '324'},
    { id: 9, mtitle: 'Жлобин новый ж/д мост',  levelm: '324'}
  ];

  class Mosty extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.state = {
        newUser: {
          name: [this.state.date.toLocaleDateString() ," / ", this.state.date.toLocaleTimeString()],
          gender: "",
          name1: ""
        },
    
        genderOptions: [
        "Отверницкий (новый) а/д мост", 
        "Отверницкий (старый) а/д мост", 
        "Речицкий ж/д мост",
        "Жлобин новый ж/д мост",
         "Жлобин ж/д мост",
        "Жлобин а/д мост",
        "Рогачев а/д мост",
       "Быхов а/д мост",
        "Могилев а/д мост"],
         genderOptions1: [
          "Березино а/д мост", 
          "Щатково а/д мост", 
          "Бобруйск а/д мост",
         "Бобруйск ж/д мост",
         "Какель ж/д мост "],
          genderOptions2: [
            "Чечерский а/д мост", 
            "Ветковский а/д мост",
            "Кленковский ж/д мост",
            "Гомельский пешеходный мост",
            "Гомельский а/д  мост",
            "Гомельский а/д  мост (старый)",
            "Гомельский ж/д мост",
           "Новобелицкий а/д мост",
          "Никольский а/д мост"],
          genderOptions3: [
              "Лунно а/д мост", 
              "Румблевский а/д мост",
             "Гродно обход а/д мост",
             "Гродно кольцев.а/д мост",
            "Гродно ж/д мост",
          "Гродно  (ул.Горновых) а/д мост",
        "Гродно (ул.Поповича) а/д мост"]
      };
      this.handleTextArea = this.handleTextArea.bind(this);
      this.handleAge = this.handleAge.bind(this);
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
      const levelCollRef = collection(db, 'gabmosty')
      addDoc (levelCollRef, {userData})
    }
    
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          name: "",
          gender: "",
          name1: ""
    
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
          title={"Мост"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Выберете мост"}
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
          title={"Текущая высота пролета, м"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Текущая высота пролета, м"}
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Березина</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Мост"}
          name={"gender"}
          options={this.state.genderOptions1}
          value={this.state.newUser.gender}
          placeholder={"Выберете мост"}
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
          title={"Текущая высота пролета, м"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Текущая высота пролета, м"}
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Сож</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Мост"}
          name={"gender"}
          options={this.state.genderOptions2}
          value={this.state.newUser.gender}
          placeholder={"Выберете мост"}
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
          title={"Текущая высота пролета, м"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Текущая высота пролета, м"}
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Неман</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Мост"}
          name={"gender"}
          options={this.state.genderOptions3}
          value={this.state.newUser.gender}
          placeholder={"Выберете мост"}
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
          title={"Текущая высота пролета, м"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"Текущая высота пролета, м"}
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
        <Tablerealtimemosty />
        </Grid>
      </Grid>
      </Box>
            {/* <Box sx={{ flexGrow: 1 }}>
           <p>река Днепр</p> 
           <Grid container spacing={2}>
           <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Речицкий ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Отверницкий (старый) а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>'Отверницкий (новый) а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Могилев а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Быхов а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Рогачев а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Жлобин а/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Жлобин ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
          <Typography>Жлобин новый ж/д мост</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
          <TextField id="outlinedgidpost" label="Текущая высота пролета, м" variant="outlined" type="number" />
          </p>
          <Button variant="contained">Сохранить</Button>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
      </Box> */}
    </div>
    )
    }
  }
    export default Mosty;