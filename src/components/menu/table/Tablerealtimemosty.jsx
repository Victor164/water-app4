
  import React, { useState } from 'react';
  import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
  import { db }from '../login/form/tabmenu/yved/init-firebase';
  import { useEffect } from 'react';
  import { mostyColl, waterColl } from '../login/form/tabmenu/yved/firestore-collections';
  import Accordion from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
  function Tablerealtimemosty () {
      const [level, setLevel] = useState([])
      useEffect(()=>{
       const ubsub = onSnapshot(mostyColl, snapshot =>{
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
        const docRef = doc(db, 'gabmosty', id)
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
                <li  key ={wat.id}>Текущая высота пролета, м : <b>{wat.data.userData.name1}</b> </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
               
     </div>
      )
      }
  
      export default Tablerealtimemosty;   



    
  

    