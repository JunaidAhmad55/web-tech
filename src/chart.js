import React, { useContext,useState,useEffect } from 'react';
import Context from "./Context"
import { Bar } from 'react-chartjs-2';
import counterContext from './Context';
import axios from "axios";
import { connect } from "react-redux";
import {listaction } from "./store/actions/listaction";








 function VerticalBar(props)  {
  const data = {
    labels: [],
 //    labels:[],
   datasets: [
     {
       label: 'Orders',
       
    
        data: [],
     //   data:[],
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)',
         'rgba(255, 99, 132, 0.2)',
       ],
       borderColor: [
         'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)',
         'rgba(255, 159, 64, 1)',

       ],
       borderWidth: 1,
     },
   ],
 };

 const options = {
  legend: {
    labels: {
        fontColor: "blue",
        fontSize: 18
    }
},

scales: {
  xAxes: [
    {
      scaleLabel: { fontColor: "blue" }, // this line sets the label's font to blue
      ticks: { fontColor: "blue" },
      gridLines: { drawBorder: true, color: "blue" }
    }
  ],
yAxes: [
{
 ticks: {
   beginAtZero: true,
 },
},
],
},
 };
//  let set = BarChartDataSet(values: entries, label: "Test")
// set.colors = [UIColor.green]
// set.valueTextColor = UIColor.white
// set.valueFormatter = IntegerValueFormatter()
// let data = BarChartData(dataSet: set)
// chart.data = data,

  useEffect(() => {

props.listaction();

  },[]);

    let counterValue=useContext(counterContext);
    console.log("pakistan");
     for(let i=0;i<props.userSection.listuser.length;i++){
      // console.log(props.userSection.listuser[i].clientname);

      data.labels.push(props.userSection.listuser[i].clientname)
      data.datasets[0].data.push(parseInt( props.userSection.listuser[i].clientorder))
      console.log(data.labels)
      console.log(data.datasets[0].data)
     }
    let name=props.userSection.listuser.name;
    // console.log(props.userSection.listuser[2]);

// data.labels.push(counterValue.name[0]);
// data.datasets[0].data.push(counterValue.value[0])

return(
  <>

    <div style={{width:"100%",height:"fit-content", paddingTop:"",}}>

    <div
    style={{width:"70%",backgroundColor:"",margin:"auto"}}
    >
    <Bar data={data} 
    options={options} 
    labels={{ color: 'blue' }}
    />
    </div>
    </div>
  </>
 );
}

export default connect((store) => {
  return store
},{listaction})(VerticalBar)