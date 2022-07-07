import React, { useState } from 'react';
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db }from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import { levelColl, waterColl } from '../login/form/tabmenu/yved/firestore-collections';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Tablerealtime3 () {
    const [water, setWater] = useState([])
    useEffect(()=>{
     const ubsub = onSnapshot(waterColl, snapshot =>{
      setWater(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
     })
    
    return ()=>{
      
      ubsub()
  
    }
    
    },[])
    return (<div >
      
      {water.map(wat =>(

              <Typography> {wat.data.userData.name} {wat.data.userData.gender}</Typography>
    
          ))}
             
   </div>
    )
    }

    export default Tablerealtime3;   


    
  

    