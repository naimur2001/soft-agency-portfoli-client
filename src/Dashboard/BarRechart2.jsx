import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarRechart2 = () => {
  const [data,setData]=useState([])
console.log(data)
  useEffect(() => {
    
      fetch(`https://software-portfolio-tawny.vercel.app/get/services`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    
  }, []);



  return (
    <div >
       <BarChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="title" />
          <YAxis dataKey='title'/>
          <Tooltip 
         
        />
          <Legend />
          <Bar dataKey="title" fill="blue" background={{ fill: 'purple' }} />
    
          
    </BarChart>
    </div>
  )
}

export default BarRechart2