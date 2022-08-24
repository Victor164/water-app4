import React, {useState} from "react"
import { useEffect } from 'react';
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { levelColl } from '../../../../login/form/tabmenu/yved/firestore-collections';
import { db }from '../../../../login/form/tabmenu/yved/init-firebase';
import './Mogilev.css';
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
// import { Line, LineChart,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
//import { Chart } from "react-google-charts";


// function Mogilev () {

//   const [level, setLevel] = useState([])
//   useEffect(()=>{
//    const ubsub = onSnapshot(levelColl, snapshot =>{
//     setLevel(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
//    })

//   return ()=>{
    
//     ubsub()

//   }
  
//   },[])
//   useEffect(()=>{
//     console.log(level)
//  },[level])

    // const data = [
      

    //     {
    //       name: "15.03",
    //       level: 4500,
    //       level1: 3500
    //     },
    //     {
    //       name: "15.04",
    //       level: 9800,
    //       level1: 4500
    //     },
    //     {
    //       name: "15.05",
    //       level: 3908,
    //       level1: 2500
    //     },
    //     {
    //       name: "15.06",
    //       level: 4800,
    //       level1: 6500  
    //     },
    //     {
    //       name: "15.07",
    //       level: 3800,
    //       level1: 5500
    //     },
    //     {
    //       name: "15.08",
    //       level: 4300,
    //       level1: 7500
    //     },
    //     {
    //       name: "15.09",
    //       level: 6500,
    //       level1: 8500
    //     },
    //     {
    //       name: "15.10",
    //       level: 6980,
    //       level1: 9500
    //     },
    //     {
    //       name: "30.11",
    //       level: 9500,
    //       level1: 6500
    //     }
    //   ];


// return ( <div style={{ display: "flex", maxWidth: 1000, marginLeft: "50px" }} >
//   <Line data={data1} />
   {/* {level.map(wat =>( */}
    {/* <LineChart 
  width={1000}
  height={400}
  data={data}
  margin={{ top: 25, right: 30, left: 10, bottom: 25 }}
  >
 
  <XAxis  dataKey="name" />
  <YAxis  />
  <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line
        title = "2022 год"
        type="monotone"
        dataKey="level"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
  <Line type="monotone" dataKey="level1" stroke="#387908"  activeDot={{ r: 8 }}/>
   </LineChart> */}
// </div>
// )
// }

// export default Mogilev;

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

export default function Mogilev() {


  return (
    <div style={{ display: "flex", maxWidth: 1000, marginLeft: "50px" }}>
          <iframe width="703" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQomXHlZ-bL-iZCJfJ7sPf1SZPQBLYy7d1GnIz_zXDg9_1KAZc0kO9E5rTQj1V4SxqKyoAL05O2eTuH/pubchart?oid=291305379&amp;format=interactive"></iframe>
      {/* <Line data={ { labels:[wat.data.userData.name],
  datasets: [
    {
      label: "2022",
      data: [wat.data.userData.name1],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "2021",
      data: [120, 125, 135, 151, 154, 176, 170, 175, 165],
      fill: false,
      borderColor: "#742774"
    }
    ,
    {
      label: "2020",
      data: [100, 122, 135, 140, 145, 156, 160, 142, 126],
      fill: false,
      borderColor: "#567832"
    }
  ]}} /> */}

    </div>
  );
}