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
import Tablerealtimegirdoyzel from "../../../table/Tablerealtimegirdoyzel";

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const columns = [
    {
      field: 'gyztitle',
      headerName: 'Наименование рек, каналов и гидроузлов',
      width:330,
      editable: true,
    },
    {
      field: 'levelgyzVB',
      headerName: 'Уровень воды над проектным горизонтом,ВБ см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'levelgyzNB',
      headerName: 'Уровень воды над проектным горизонтом,НБ см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'daylevelgyzVB',
      headerName: 'Изменение уровня за сутки, ВБ, см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'daylevelgyzNB',
      headerName: 'Изменение уровня за сутки, НБ, см',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'textgyz',
      headerName: 'Примечание',
      width: 150,
      editable: true,
    }
  ];
  const rows= [
    { id: 1, gyztitle: 'р. Припять'},
    { id: 2, gyztitle: 'Судоходный г/у №12 Стахово',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 3, gyztitle: 'Судоходный г/у №11 Качановичи	',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 4, gyztitle: 'р. Пина'},
    { id: 5, gyztitle: 'Судоходный г/у №1 Дубой',levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null },
    { id: 6, gyztitle: 'ДБК'},
    { id: 7, gyztitle: 'Судоходный г/у №2 Переруб',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 8, gyztitle: 'Судоходный г/у №3 Рагодощ',   levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у №4 Овзичи',  levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у №5 Ляховичи', levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null},
    { id: 9, gyztitle: 'Судоходный г/у Кобрин', levelgyzVB: '324', levelgyzNB: '534', daylevelgyzVB: '2344', daylevelgyzNB:'34', textgyz:null}
  ];
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
  const Input3 = props => {
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
  const Input4 = props => {
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
  class Gidroyzli extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.state = {
        newUser: {
          name: [this.state.date.toLocaleDateString() ," / ", this.state.date.toLocaleTimeString()],
          gender: "",
          name1: "",
          name2:"",
          name3:"",
          name4: "",
        },
    
        genderOptions: [
        "Судоходный г/у №12 Стахово", 
        "Судоходный г/у №11 Качановичи"],
         genderOptions1: [
          "Судоходный г/у №1 Дубой"],
          genderOptions2: [
            "Судоходный г/у №2 Переруб", 
            "Судоходный г/у №3 Рагодощ",
            "Судоходный г/у №4 Овзичи",
            "Судоходный г/у №5 Ляховичи",
           "Судоходный г/у Кобрин"],
          genderOptions3: [
              "Судоходный г/у №8 Залузье", 
              "Судоходный г/у №9 Новосады",
             "Судоходный г/у №10 Тришин",
             "Брест плотина"]
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
      const level1CollRef = collection(db, 'level1')
      addDoc (level1CollRef, {userData})
    }
    
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          name: "",
          gender: "",
          name1: "",
          name2:"",
          name3: "",
          name4:""
    
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
// function Gidroyzli () {
    return (<div >
      <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
        <Grid item xs={7}>
             <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Припять</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидроузел"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидроузел"}
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
          title={"Уровень воды над ПГ, ВБ"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ, НБ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"НБ"}
          handleChange={this.handleInput}
        />{" "}
        <Input3
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name3"}
          value={this.state.newUser.name3}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input4
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name4"}
          value={this.state.newUser.name4}
          placeholder={"НБ"}
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
          <Typography>река Пина</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидроузел"}
          name={"gender"}
          options={this.state.genderOptions1}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидроузел"}
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
          title={"Уровень воды над ПГ, ВБ"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ, НБ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"НБ"}
          handleChange={this.handleInput}
        />{" "}
        <Input3
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name3"}
          value={this.state.newUser.name3}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input4
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name4"}
          value={this.state.newUser.name4}
          placeholder={"НБ"}
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
          <Typography>ДБК</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидроузел"}
          name={"gender"}
          options={this.state.genderOptions2}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидроузел"}
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
          title={"Уровень воды над ПГ, ВБ"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ, НБ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"НБ"}
          handleChange={this.handleInput}
        />{" "}
        <Input3
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name3"}
          value={this.state.newUser.name3}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input4
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name4"}
          value={this.state.newUser.name4}
          placeholder={"НБ"}
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
          <Typography>река Муховец</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Гидроузел"}
          name={"gender"}
          options={this.state.genderOptions3}
          value={this.state.newUser.gender}
          placeholder={"Выберете гидроузел"}
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
          title={"Уровень воды над ПГ, ВБ"}
          name={"name1"}
          value={this.state.newUser.name1}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input2
          inputType={"text"}
          title={"Уровень воды над ПГ, НБ"}
          name={"name2"}
          value={this.state.newUser.name2}
          placeholder={"НБ"}
          handleChange={this.handleInput}
        />{" "}
        <Input3
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name3"}
          value={this.state.newUser.name3}
          placeholder={"ВБ"}
          handleChange={this.handleInput}
        />{" "}
          <Input4
          inputType={"text"}
          title={"Изменение уровня за сутки, см"}
          name={"name4"}
          value={this.state.newUser.name4}
          placeholder={"НБ"}
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
      <Tablerealtimegirdoyzel />
        </Grid>
      </Grid>
      </Box>
      {/* <div style={{ height: 630, width: '430%'}}>
    <DataGrid
     rows={rows}
     columns={columns}
     pageSize={10}
     // rowsPerPageOptions={[5]}
     checkboxSelection
     disableSelectionOnClick
     components={{
     Toolbar: CustomToolbar,
        }}
      />
      <Button variant="contained">Сохранить</Button>
      </div> */}
   </div>
    // <div >
    //    <Box sx={{ flexGrow: 1 }}>
    //        <p> река Припять</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №12 Стахово</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №11 Качановичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //       <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p> река Пина</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №1 Дубой</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>ДБК</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №2 Переруб</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №3 Рагодощ</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №4 Овзичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №5 Ляховичи</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у Кобрин</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Муховец</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный г/у №8 Залузье</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №9 Новосады</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у №10 Тришин</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Брест плотина</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Западная Двина</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Судоходный шлюз Витебская ГЭС</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>река Неман</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Гродненская ГЭС</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    //   <Box sx={{ flexGrow: 1 }}>
    //        <p>Августовский канал</p> 
    //        <Grid container spacing={2}>
    //        <Grid item xs={3}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //      >
    //       <Typography>Белорусская часть г/у Кужинец</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у Волкушек</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у Домбровка</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
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
    //       <Typography>Судоходный г/у Немново</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <p>
    //       <TextField id="outlinedgidpost" label="Уровень воды над проектным горизонтом, см" variant="outlined" type="number" />
    //       </p>
    //       <TextField id="outlinedgidpost" label="Изменение уровня за сутки, см" variant="outlined" type="number" />
    //       <p></p>
    //       <TextField id="outlinedgidpost" label="Примечание" variant="outlined" />
    //       <p></p>
    //       <Button variant="contained">Сохранить</Button>
    //       </Typography>
    //     </AccordionDetails>
    //     </Accordion>
    //     </Grid>
    //     </Grid>
    //   </Box>
    // </div>
    )
    }
  }
    export default Gidroyzli;