import React from 'react'
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
const Section4 = () => {
  const aboutArray=[
    {
      id:1,
      title:"Our Years of Experiences",
      numbers:5
    },
    {
      id:2,
      title:"Our Experts",
      numbers:37
    },
    {
      id:3,
      title:"Our Clients",
      numbers:130
    },
    {
      id:4,
      title:"Our Projects",
      numbers:145
    },
  ]
  return (
    <div className='my-5 font-fancy'>
<h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'>
  {/* text animation  */}
  <Typewriter
  options={{
    strings: ['Just', "We are"],
    autoStart: true,
    loop: true,
    delay: 50,
  }}
/></h1>
<div>
<div className='my-10 grid lg:grid-cols-4 grid-cols-2 lg:mx-0 lg:gap-5 gap-0 mx-5 '>
  {
    aboutArray.map((aa)=>
   <div key={aa.id} className=' card shadow-md  px-2  py-1 font-semibold lg:text-xl text-xl text-slate-500'>
    <h1>{aa.title.slice(0,3)}</h1>
    {/* number counting */}
<span     className='text-black'>   <CountUp
    key={aa.id}
    start={17}
    end={aa.numbers}
    duration={2}
    enableScrollSpy="true"
    suffix=' +'
>
  
</CountUp> </span>
  <h1>{aa.title.slice(3,aa.title.length)}</h1>
   </div>
    )
  }
</div>
</div>
    </div>
  )
}

export default Section4