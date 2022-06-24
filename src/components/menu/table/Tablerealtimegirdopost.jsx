
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
  
  function Tablerealtimegirdopost () {
      const [level, setLevel] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(levelColl, snapshot =>{
        setLevel(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
       })
  
      return ()=>{
        
        ubsub()
    
      }
      
      },[])
      useEffect(()=>{
        console.log(level)
     },[level])
      function deleteWater(id) {
        const docRef = doc(db, 'level', id)
        deleteDoc(docRef).then(() => console.log("Document deleted")
        .catch(error => console.log(error.message))
        )
      }
      return (<div >
        
        {level.map(wat =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ><button onClick={() => deleteWater(wat.id)}>Удалить запись</button>
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
               
     </div>
      )
      }
  
      export default Tablerealtimegirdopost;   



    
  

    