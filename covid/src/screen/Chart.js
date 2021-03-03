import React from 'react'
import { Line } from  'react-chartjs-2';
import { useState, useEffect } from "react";

function LineChart() {
     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [totalCase, setItems] = useState([]);
     const [totalSamples, settotalSamples] = useState([]);

     useEffect(() => {
       fetch("https://api.rootnet.in/covid19-in/stats/testing/history")
         .then((res) => res.json())
         .then(
           (result) => {
             settotalSamples(result.data);
           },
           (error) => {
             setIsLoaded(true);
             setError(error);
           }
         );
     }, []);
      useEffect(() => {
        fetch("https://api.rootnet.in/covid19-in/stats/history")
          .then((res) => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.data);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      }, []);
    const samples = totalSamples.map((ele) => ele.totalSamplesTested);
    const deaths = totalCase.map((ele)=>ele.summary.deaths)
    const discharged = totalCase.map((ele) => ele.summary.discharged);
    const cases = totalCase.map((ele)=> ele.summary.total)
    const labels = totalSamples.map((ele)=>ele.day)

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Total Case",
          data: cases,
          borderColor: ["#f0f"],
          
        },
        {
          label: "Samples Tested",
          data: samples,
          borderColor: ["#0f0"],
        },
      ],
    };
    const deathsData = {
      labels: labels,
      datasets: [
        {
          label: "Total Case",
          data: cases,
          borderColor: ["#f00"],
        },
        {
          label: "Total Deaths",
          data: deaths,
          borderColor: ["#0f0"],
        },
        {
          label: "Discharged",
          data: discharged,
          borderColor: ["#00f"],
        },
      ],
    };

    return (<><h1> Total cases v/s total samples</h1><Line style={{margin:'7%',width:'20%',height:'40%'}} data={data}/>
    <h1>total cases ,deaths and recoveries</h1>
    <Line style={{margin:'7%',width:'20%',height:'40%'}} data={deathsData}/></>);
}

function Graphs() {
    return (
        <div className='chart' style={{margin:'7%',maxWidth:'1000px'}}>
            <LineChart />
        </div>
    )
}
export default Graphs
