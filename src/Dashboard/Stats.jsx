import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Stats = () => {

  const [data,setData]=useState([])

  useEffect(() => {
    // getting data from database
  
    fetch(`https://software-portfolio-tawny.vercel.app/get/teams`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);
const [data1,setData1]=useState([])

useEffect(() => {
  
    fetch(`https://software-portfolio-tawny.vercel.app/get/services`)
      .then(res => res.json())
      .then(data => setData1(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);
  return (
    <div className='grid grid-cols-4 gap-5 my-10'>
      
<div className='w-[250px] h-[100px] text-xl font-fancy flex flex-col gap-2 bg-slate-900 text-white rounded-2xl p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

  <h1 className='font-semibold'>Total Team Member</h1>
  <h1 className='font-semibold'>{data.length}</h1>
</div>
<div className='w-[250px] h-[100px] text-xl font-fancy flex flex-col gap-2 bg-slate-900 text-white rounded-2xl p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>


  <h1 className='font-semibold'>Total Client</h1>
  <h1 className='font-semibold'>140</h1>
</div>
<div className='w-[250px] h-[100px] text-xl font-fancy flex flex-col gap-2 bg-slate-900 text-white rounded-2xl p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>



  <h1 className='font-semibold'>Total Service</h1>
  <h1 className='font-semibold'>{data1.length}</h1>
</div>
    </div>
  )
}

export default Stats