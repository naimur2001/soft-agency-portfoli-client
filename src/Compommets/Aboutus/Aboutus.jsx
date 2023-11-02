import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useState } from 'react';
const Aboutus = () => {
// js package is used here for photo library
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      delay: 200, 
    });
  }, []);

 

  const [data,setData]=useState([])
  console.log(data)
  useEffect(() => {
    // getting data from database
  
    fetch(`http://localhost:5000/get/teams`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, []);
  return (
    <div className='my-5 font-fancy'>
    <h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'>
      
      {/* used typwriter animation for text */}
      <Typewriter
options={{
  strings: ['OUR', "ESRAQIFY TEAM"],
  autoStart: true,
  loop: true,
  delay: 50,
}}

/></h1>
<div className="lg:px-0 px-5 mt-10">
<ResponsiveMasonry  columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
        <Masonry >
  {
    data?.map((card,index)=><>
    
<div  data-aos={index % 2 === 1 ? 'flip-up' : 'flip-down'}  className='lg:p-2 p-0 relative group' key={card.id} >
  <img className='w-80 rounded-tl-lg rounded-br-lg'  src={card.photo_url}   alt="" />
  <div className='absolute bottom-28 left-24  text-2xl font-semibold text-slate-100 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>
<p className='text-red-500 font-mono'>{card.expert}</p>
  </div>
  <div className="absolute inset-0 top-52 lg:mr-16 mr-0 flex items-center justify-center flex-col">
                <p  className={`text-white lg:ml-14 opacity-70   text-3xl font-bold `}>
                  {/* showing first name of empoloyee */}
                  {(card?.name.split(' ')[1])||(card.name) }</p>
             
                <p className='text-white text-lg font-semibold'>{card.designation1}</p>

              </div>
</div>
    </>)
  }
  
  </Masonry>
      </ResponsiveMasonry>
  </div>     
    </div>
  )
}

export default Aboutus