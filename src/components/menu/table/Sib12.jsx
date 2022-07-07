
  import React, { useState } from 'react';
  import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
  import { db }from '../login/form/tabmenu/yved/init-firebase';
  import { useEffect } from 'react';
  import { mostyColl, waterColl,level1Coll,levelColl } from '../login/form/tabmenu/yved/firestore-collections';
  import Accordion from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
  function Sib12 () {
      const [level, setLevel] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(mostyColl, snapshot =>{
        setLevel(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
       })
  
      return ()=>{
        
        ubsub()
    
      }
      
      },[])
      const [water, setWater] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(waterColl, snapshot =>{
        setWater(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
       })
      
      return ()=>{
        
        ubsub()
    
      }
      
      },[])
      const [level1, setlevel1] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(levelColl, snapshot =>{
        setlevel1(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
       })
      
      return ()=>{
        
        ubsub()
    
      }
      
      },[])
      const [level2, setlevel2] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(level1Coll, snapshot =>{
        setlevel2(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
       })
      
      return ()=>{
        
        ubsub()
    
      }
      
      },[])
      return (<div >
             Уровень на гидропостах
        {level1.map(wat =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {wat.data.userData.name} {wat.data.userData.gender}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <li  key ={wat.id}>Уровень воды над 0 граф : <b>{wat.data.userData.name1}</b> </li>
                <li  key ={wat.id}>Уровень воды над ПГ  : <b>{wat.data.userData.name2}</b> </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
                 Уровень на гидроузлах
        {level2.map(wat =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {wat.data.userData.name} {wat.data.userData.gender}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <li  key ={wat.id}>Уровень воды над ПГ (ВБ), см : <b>{wat.data.userData.name1}</b> </li>
                <li  key ={wat.id}>Уровень воды над ПГ (НБ), см : <b>{wat.data.userData.name2}</b> </li>
                <li  key ={wat.id}>Изменение уровня за сутки, см : <b>{wat.data.userData.name3}</b> </li>
                <li  key ={wat.id}>Изменение уровня за сутки, см : <b>{wat.data.userData.name4}</b> </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
           Подмостовые переходы
        {level.map(wat =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {wat.data.userData.name} {wat.data.userData.gender}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <li  key ={wat.id}>Текущая высота пролета, м : <b>{wat.data.userData.name1}</b> </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
               Уведомления
        {water.map(wat =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {wat.data.userData.name} {wat.data.userData.gender}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <li  key ={wat.id}>{wat.data.userData.about},  {wat.data.userData.skills}</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
               
     </div>
      )
      }
  
      export default Sib12;   



    
  

    