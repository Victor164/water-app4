
  import React, { useState } from 'react';
  import Level from '../material/level/Level';
  import './Table.css';
  import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  import { db }from '../login/form/tabmenu/yved/init-firebase';
  import { useEffect } from 'react';
  import Accordion from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
  
  function Tablerealtimegirdopost () {
      const [level, setLevel] = useState([])
      useEffect(()=>{
         getLevel()
      },[])
      useEffect(()=>{
         console.log(level)
      },[level])
      function getLevel(){
          const levelCollRef = collection(db, 'level')
          
         getDocs(levelCollRef)
          .then(response => {
             const lev = response.docs.map(doc => ({
                 data: doc.data(),
                 id: doc.id    
             }))
             setLevel(lev)
             })
             .catch(error => console.log(error.message))
         }
      return (<div className='new'>
                
               
               <div className="item3" >
                      {level.map(lv =>(
                      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {lv.data.userData.name} {lv.data.userData.gender}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <li  key ={lv.id}> {lv.data.userData.about},  {lv.data.userData.skills}</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
  
               </div>
     </div>
      )
      }
  

  export default Tablerealtimegirdopost;   



    
  

    