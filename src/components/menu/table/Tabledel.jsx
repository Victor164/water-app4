import React, { useState } from 'react';
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db }from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Tabledel () {
    const [water, setWater] = useState([])
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
       function deleteWater(id) {
          const docRef = doc(db, 'water', id)
          deleteDoc(docRef).then(() => console.log("Document deleted")
          .catch(error => console.log(error.message))
          )
        }
    return (<div className='new'>
             <div className="item3" >
                    
                    {/* {water.map(wat =>(
                    <li  key ={wat.id}>{wat.data.userData.about}, {wat.data.userData.gender}, {wat.data.userData.name}, {wat.data.userData.skills}
                 </li>))} */}
                    {water.map(wat =>(
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
              <li  key ={wat.id}> {wat.data.userData.about},  {wat.data.userData.skills}</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          ))}
             </div>
             <div className="item4">
    
             </div>
             
   </div>
    )
    }

    export default Tabledel;   


    
  

    