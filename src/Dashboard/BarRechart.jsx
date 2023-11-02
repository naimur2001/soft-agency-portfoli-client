import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const BarRechart = () => {


  useEffect(() => {
    const [data,setData]=useState([])
    fetch(`http://localhost:5000/get/teams`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);
  return (
    <div>
       <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey='age' />
        <Tooltip 
          formatter={(value, name, props) => [`${value} years old`, `Designation 1: ${props.payload.designation1}`, ]}
        />
        <Legend />
        <Bar dataKey="age" fill="#8884d8" />
      
      </BarChart>
    </div>
  )
}

export default BarRechart