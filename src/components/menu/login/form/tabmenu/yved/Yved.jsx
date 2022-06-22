import React, { Component } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addDoc, collection } from "firebase/firestore";
import { db } from "./init-firebase";

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

class Yved extends Component {
constructor(props) {
  super(props);
  this.state = {date: new Date()};
  this.state = {
    newUser: {
      name: [this.state.date.toLocaleDateString() ," / ", this.state.date.toLocaleTimeString()],
      gender: "",
      skills: [],
      about: ""
    },

    genderOptions: [
    "дер.Левки (воздушный переход) – Прудки III", 
    "Прудки III – Могилев (мостовой переход)", 
    "Могилев (мостовой переход) – прк. Стайки III",
    "прк. Стайки III – Быхов",
    "Быхов – у.р. Друть",
    "у.р. Друть – у.р. Березины",
    "у.р. Березины – прк. Черное I",
    "прк. Черное I – Речицкий ССРЗ",
    "Речицкий ССРЗ – прк. Боровая I",
     "прк. Боровая I – Подречицкое",
    "Подречицкое – 1082 км",
    "1082 км – Каменка ",
     "Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть)"],
     genderOptions1: [
      "г.Березино (Березино пристань) – у.р. Волчанки", 
      "у.р. Волчанки – прк. Течка", 
      "прк. Течка – Бобруйский порт",
      "Бобруйский порт – прк. Волышино",
      "прк. Волышино – оз. Сельное",
      "оз. Сельное – Якимова Слобода IV",
      "Якимова Слобода IV – устье реки Березина"],
    skillOptions: ["Изменение СНО", "Метеологические условия", "Опасно для жизни"]
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

  // fetch("http://localhost:3000", {
  //   method: "POST",
  //   body: JSON.stringify(userData),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   }
  // }).then(response => {
  //   response.json().then(data => {
  //     console.log("Successful" + data);
  //   });
  // });
  const waterCollRef = collection(db, 'water')
  addDoc (waterCollRef, {userData})
}

handleClearForm(e) {
  e.preventDefault();
  this.setState({
    newUser: {
      name: "",
      gender: "",
      skills: [],
      about: ""
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
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>река Днепр (дер.Левки (воздушный переход) - н.п. Любеч (граница Белводпуть - Укрводпуть)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Участок реки"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Выберете участок"}
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
        <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "}
        <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        />

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
          <Typography>река Березина (г.Березино (Березино - пристань) - устье реки Березина</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Select
          title={"Участок реки"}
          name={"gender"}
          options={this.state.genderOptions1}
          value={this.state.newUser.gender}
          placeholder={"Выберете участок"}
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
        <CheckBox
          title={"Причина уведомления"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "}
        <TextArea
          title={"Содержание"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Содержание"}
        />

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
    </div>
    )
    }
  }
    export default Yved;