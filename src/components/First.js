import React,{useState,useEffect} from 'react';
import { Line } from "react-chartjs-2";

import socketIOClient from "socket.io-client";

import '../App.css';
function First() {
    const [graphData,setGraphData]=useState({
        labels: [],
        datasets: [
          {
            label: "BINANCE_LTCBTC",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [],
          },
        ],        
    });


    useEffect(() => {
    const socket = socketIOClient("http://localhost:4000/BINANCE_LTCBTC")
    socket.on("priceData",(data)=>{
      data= JSON.parse(data);
      let p =[...graphData.datasets[0].data,data.data[0].p]

      let time=[...graphData.labels,new Date(data.data[0].t).toLocaleTimeString()];
     
      
      if (p.length> 10  || time.length >10){
        p.shift();
        time.shift();
    }

      setGraphData({
        datasets: [
          {
            label: "BINANCE_LTCBTC",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: p,
          },
        ],
        labels: time,
      })
    }); 
    },[])
    return (
        <div>
           <h2 className="heading">First One</h2>
           <Line
          data={graphData}
          options={{
            title: {
              display: true,
              text: "BINANCE LTCBTC",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        </div>
    )
}

export default First
