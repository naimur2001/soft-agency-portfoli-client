import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarRechart2 = () => {
  const [data,setData]=useState([])

  useEffect(() => {
    
      fetch(`http://localhost:5000/get/services`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    
  }, []);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  return (
    <div >
       <BarChart
      width={1200}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis dataKey='title'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Services" fill="blue" background={{ fill: 'purple' }} />
          
    </BarChart>
    </div>
  )
}

export default BarRechart2