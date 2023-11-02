import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const PieRechart = () => {

 
  const [serviceData,setserviceData]=useState([])



useEffect(() => {
  
    fetch(`http://localhost:5000/get/services`)
      .then(res => res.json())
      .then(data => setserviceData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);

  return (
    <div>
  
    </div>
  )
}

export default PieRechart