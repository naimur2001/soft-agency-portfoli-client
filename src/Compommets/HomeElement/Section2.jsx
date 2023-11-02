import React from 'react'
import Typewriter from 'typewriter-effect';
import '../../../public/All.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Section2 = () => {

// data getting from datatbase
const [data,setData]=useState([])

useEffect(() => {
  
    fetch(`http://localhost:5000/get/services`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);

  return (
    <div className='my-5 font-fancy'>
      <h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
  options={{
    strings: ['We Provide', "Quality Services"],
    autoStart: true,
    loop: true,
    delay: 50,
  }}
/></h1>
      <div className='lg:w-[100%] w-[99%] lg:px-0 px-2'>
        {
          data?.slice(0,3).map((cardData,index)=>
            <div key={cardData._id} className={`cardAnim card my-5 lg:card-side bg-transparent lg:w-[700px] lg:h-[250px] shadow-xl  ${index % 2 === 0 ? 'lg:card-side lg:ml-auto' : 'lg:card-side-right'}`}>
            <figure><img src={cardData.photo_url} className='lg:w-[800px] object-cover lg:h-[250px]' alt="service"/></figure>
            <div className="card-body">
         
              
<h1  className="card-title"> {cardData.title}</h1>
              <p>{cardData.description}</p>
              <div className="card-actions justify-end">
          
              </div>
            </div>
          </div>
          )
        }
     <h1 className='text-center my-10 font-bold text-2xl hover:text-red-400 '   >   <Link  to={'/services'} >More...</Link></h1>
      </div>
    </div>
  )
}

export default Section2