import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import { useState } from 'react';
const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      delay: 200, 
    });
  }, []);

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
<div className='grid grid-cols-1 lg:mx-0 mx-36'><svg className='mx-7 scrollAnim' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg> <span className='font-semibold'>ScrollDown</span></div>
    <div className=''>
      {
        data?.map((cardData,index)=>
          <div key={cardData._id} data-aos="flip-left" className={` card my-5 lg:card-side bg-transparent lg:w-[700px] lg:h-[250px] shadow-xl  ${index % 2 === 0 ? 'lg:card-side lg:ml-auto' : 'lg:card-side-right'}`}>
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
 
    </div>
  </div>
  )
}

export default Services