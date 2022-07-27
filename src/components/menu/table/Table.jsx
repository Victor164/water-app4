import React, { useState } from 'react';
import Level from '../material/level/Level';
import './Table.css';
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Material from '../material/Material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import News from '../news/News';
import { DataGrid,GridToolbarContainer, GridToolbarFilterButton,GridToolbar, GridToolbarQuickFilter,ruRU} from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import RefreshIcon from '@mui/icons-material/Refresh';



const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);
CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

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
function Table () {
    const [water, setWater] = useState([])
    const [search, setSearch] = useState("");
    // const [filterList] = useState("");
    useEffect(()=>{
        getWater()
    },[])
    useEffect(()=>{
       console.log(water)
    },[water])
    function getWater(){
        const waterCollRef = collection(db, 'water')
        
       getDocs(waterCollRef)
        .then(response => {
           const wate = response.docs.map(doc => ({
               data: doc.data(),
               id: doc.id    
           }))
           setWater(wate)
           })
           .catch(error => console.log(error.message))
       }
       const SearchBlog=(e)=>{
        e.preventDefault();
        setWater(water.filter((water)=>
        water.data.userData.gender.toLowerCase().includes(search.toLowerCase()) 
        ));
        this.setState({water: SearchBlog});
       }
    //   const filterList=(e)=>{
    //     var filteredList = this.props.data.items.filter(function(item){
    //         return  water.data.userData.gender.toLowerCase().search(e.target.value.toLowerCase())!== -1;
    //     });
    //     // обновление состояния
    //     this.setState({water: filteredList});
    // }
    return (<div className='new'>
       
               {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} >
               <Grid item xs> */}
               {/* <div className="item2" > */}
                <div className='item2'>
          
               {/* <div className="item2" > */}
            {/* <a target="_blank" href="https://nochi.com/weather/minsk-17469">
                <img src="https://w.bookcdn.com/weather/picture/4_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/>
                </a> */}
                 {/* <a target="_blank" href="https://nochi.com/weather/minsk-17469"><img src="https://w.bookcdn.com/weather/picture/7_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/></a> */}
             {/* <Weather /> */}
             <Material />
             </div> 
             {/* </div> */}
             {/* </div> */}
             {/* </Grid>
             <Grid item > */}
             <div className='item3'>
             {/* <DataGrid
             localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} 
              pageSize={20}
             disableColumnSelector
             disableDensitySelector
             components={{
             Toolbar: CustomToolbar,
            }}
           /> */}
        
           {/* <form className='filter'  onSubmit={(e)=>(SearchBlog(e))}>
            <select onChange={(e)=>{setSearch(e.target.value)}}  
            placeholder={"Выберете участок реки"}>
            <option value="дер.Левки (воздушный переход) – Прудки III">дер.Левки (воздушный переход) – Прудки III</option>
            <option value="Прудки III – Могилев (мостовой переход)">Прудки III – Могилев (мостовой переход)</option>
            <option value="Могилев (мостовой переход) – прк. Стайки III">Могилев (мостовой переход) – прк. Стайки III</option>
            <option value="прк. Стайки III – Быхов">прк. Стайки III – Быхов</option>
            <option value="Быхов – у.р. Друть">Быхов – у.р. Друть</option>
            <option value="у.р. Друть – у.р. Березины">у.р. Друть – у.р. Березины</option>
            <option value="у.р. Березины – прк. Черное I">у.р. Березины – прк. Черное I</option>
            <option value="прк. Черное I – Речицкий ССРЗ">прк. Черное I – Речицкий ССРЗ</option>
            <option value="Речицкий ССРЗ – прк. Боровая I">Речицкий ССРЗ – прк. Боровая I</option>
            <option value="прк. Боровая I – Подречицкое">прк. Боровая I – Подречицкое</option>
            <option value="Подречицкое – 1082 км">Подречицкое – 1082 км</option>
            <option value="1082 км – Каменка ">1082 км – Каменка </option>
            <option value="Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть)">Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть) </option>
            </select> */}
             {/* <Select
             onChange={(e)=>{setSearch(e.target.value)}} 
             title={"Участок реки"}
             options={genderOptions}
             placeholder={"Выберете участок реки"}
            /> */}
          {/* <button >Поиск</button>

           </form> */}
           {/* <form onSubmit={(e)=>(SearchBlog(e))}>
            <input placeholder="Поиск уведомлений" onChange={(e)=>{setSearch(e.target.value)}}/>  
          <button  type="submit">Поиск</button>
          <button><a href="/table">Назад</a></button> */}
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      onSubmit={(e)=>(SearchBlog(e))}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск уведомлений"
        inputProps={{ 'aria-label': 'Поиск уведомлений' }}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <IconButton color="primary"  type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
       <IconButton sx={{ p: '10px' }} aria-label="directions" href='/table'>
       <RefreshIcon />
      </IconButton> 
    </Paper>
           {/* </form> */}
                    {water.map(wat =>(
                    <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              components={{
                Toolbar: CustomToolbar,
              }}
            >
              <Typography > {wat.data.userData.name} {wat.data.userData.gender}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <li  key ={wat.id}> {wat.data.userData.about},  {wat.data.userData.skills}</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          ))}
             {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKQBhV1OdC6lDLEDisaIRgjUs2Aeb2zDBRnmBGx_6KPH3a5Bf7b5KehLDO7hTJbUXju2uvy57hDuH4/pubhtml?widget=true&amp;headers=false"width="280%" height="849px"></iframe> */}
             {/* </div> */}
             </div>
             {/* </Grid>
             <Grid item xs> */}
             <div className="item4">
              <News />
             </div>
                {/* </Grid>
              </Grid>
             </Box>  */}
   </div>
    )
    }

    export default Table;   


    
  

    