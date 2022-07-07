import React, {useState} from "react"
import { useEffect } from 'react';
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { levelColl } from '../../../../login/form/tabmenu/yved/firestore-collections';
import { db }from '../../../../login/form/tabmenu/yved/init-firebase';
import './Mogilev.css';
// import { Line } from "react-chartjs-2";
import { Line, LineChart,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


function Mogilev () {

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

    const data = [
        {
          name: "13.05",
          level: 2400
        },
        {
          name: "14.05",
          level: 1398
        },
        {
          name: "16.05",
          level: 9800
        },
        {
          name: "17.05",
          level: 3908
        },
        {
          name: "18.05",
          level: 4800
        },
        {
          name: "19.05",
          level: 3800
        },
        {
          name: "20.05",
          level: 4300
        }
      ];
return ( <div >
    <LineChart 
  width={1000}
  height={400}
  data={data}
  margin={{ top: 25, right: 30, left: 10, bottom: 25 }}
  >
 
  <XAxis  dataKey="name"/>
  <YAxis  />
  <Tooltip />
     <Line
        type="monotone"
        dataKey="level"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      /> 
        
      <CartesianGrid stroke="#f5f5f5" />
   
  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
  {/* <Line type="monotone" dataKey="pv" stroke="#387908" /> */}
</LineChart>
</div>
)
}

export default Mogilev;