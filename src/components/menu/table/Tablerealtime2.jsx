import React, { useState } from 'react';
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db }from '../login/form/tabmenu/yved/init-firebase';
import { useEffect } from 'react';
import { levelColl, waterColl } from '../login/form/tabmenu/yved/firestore-collections';
import { YMaps, Map, Placemark, FullscreenControl,ListBoxItem,ListBox,SearchControl,TypeSelector, Polyline, Circle, GeolocationControl } from "react-yandex-maps";
import Tablerealtime from './Tablerealtime';
import Mogilev from '../material/level/placelevel/dnepr/Mogilev';

function Tablerealtime2 () {
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
    return (<div >
      
      {level.map(wat =>(
                <Placemark geometry={[53.894548, 30.330654]} 
                   
                  properties={{
                    balloonContentHeader: "гидропост Могилева",
                    balloonContent:[ ' <li  key ={wat.id}>Уровень воды над 0 граф : <b>480</b></li><br><li  key ={wat.id}>Уровень воды над ПГ : <b>500</b></li>' ],
                    balloonContentFooter:[ ' <a href="/mogilev">Показать график</a>' ]
                }}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: '/images/Уровни.png',
                    iconImageSize: [30, 30],
                 }} />
                 
          ))}
             
   </div>
    )
    }

    export default Tablerealtime2;   


    
  

    