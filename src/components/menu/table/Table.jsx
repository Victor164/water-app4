import React, { useState } from 'react';
import Level from '../material/level/Level';
import './Table.css';
import { addDoc, collection, getDocs, doc } from "firebase/firestore";
import { db }from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Table () {
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

    return (<div className='new'>
              
               {/* <div className='item1'>
            </div> */}
               <div className="item2" >
            <a target="_blank" href="https://nochi.com/weather/minsk-17469">
                <img src="https://w.bookcdn.com/weather/picture/4_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/>
                </a>
                 {/* <a target="_blank" href="https://nochi.com/weather/minsk-17469"><img src="https://w.bookcdn.com/weather/picture/7_17469_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=589&anc_id=38816"  alt="booked.net"/></a> */}
             {/* <Weather /> */}
             </div>
             <div className="item3" >
                    
                    {/* {water.map(wat =>(
                    <li  key ={wat.id}>{wat.data.userData.about}, {wat.data.userData.gender}, {wat.data.userData.name}, {wat.data.userData.skills}</li>
                    ))} */}
          
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
              <li  key ={wat.id}> {wat.data.userData.about},  {wat.data.userData.skills}</li>
              </Typography>
            </AccordionDetails>
         
          </Accordion>
          ))}
             {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKQBhV1OdC6lDLEDisaIRgjUs2Aeb2zDBRnmBGx_6KPH3a5Bf7b5KehLDO7hTJbUXju2uvy57hDuH4/pubhtml?widget=true&amp;headers=false"width="280%" height="849px"></iframe> */}
             </div>
             <div className="item4">
                 <Level/>
             </div>
             
   </div>
    )
    }

    export default Table;   


    
  

    