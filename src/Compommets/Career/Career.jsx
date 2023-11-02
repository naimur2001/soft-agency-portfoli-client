import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Typewriter from 'typewriter-effect';

const Career = () => {
// carrer section is static  

// office image
  const albumArray=[
    {
      id:1,
      pic:"https://ollyo.com/images/careers/hero2-2x.jpg"
    },
    {
      id:2,
      pic:"https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww"
    },
    {
      id:3,
      pic:"https://ollyo.com/images/careers/hero3-2x.jpg"
    },
    {
      id:4,
      pic:"https://ollyo.com/images/careers/hero4-2x.jpg"
    },
    {
      id:5,
      pic:"https://ollyo.com/images/careers/hero5-2x.jpg"
    },
    {
      id:6,
      pic:"https://ollyo.com/images/careers/hero3-2x.jpg"
    },
  ]
// for job posting 
const jobArray=[
  {
    id:1,
    title:"Product Designer",
    dept:"Design",
    type: "Onsite",
    deadline:"12 Nov",
    vacancy:5
  },
  {
    id:2,
    title:"Intern/Fresher Designers",
    dept:"Design",
    type: "Onsite",
    deadline:"12 Nov",
    vacancy:5
  },
  {
    id:3,
    title:"Fresher React JS Developer",
    dept:"Engineering",
    type: "Onsite",
    deadline:"12 Dec",
    vacancy:7
  }
]
  return (
    <div className='my-5 font-fancy'>
      <h1 className='text-6xl font-bold my-5'>
      Work with us at ESRAQIFY!

      </h1>
      <p className='text-3xl my-5'><span className='text-5xl font-semibold text-slate-600'>ESRAQIFY</span> provides high-quality website software for global users. With over 6 million downloads, individuals, businesses, and institutions widely utilize our exceptional, customizable, and user-friendly products.</p>
<div className='my-10'>
  
<div className=''>
<ResponsiveMasonry  columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}>
        <Masonry >
        {
          albumArray.map(aa=><>
          <img src={aa.pic} className='lg:px-0 px-5 mx-5 mt-10' alt="" />
          </>)
        }
          </Masonry>
      </ResponsiveMasonry>
      </div>
</div>

<div className='my-10'>
  

  <h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
options={{
  strings: ['OUR', "BENEFITS"],
  autoStart: true,
  loop: true,
  delay: 50,
}}

/></h1>
  <p className='text-4xl my-5'>
At <span className='text-5xl font-semibold text-slate-600'>ESRAQIFY</span>, we offer a comprehensive benefits package to support our employees' well-being and work-life balance. </p>
   </div>
<div className='my-10'>

<h1 className='my-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
options={{
  strings: ['Come join us', " at ESRAQIFY"],
  autoStart: true,
  loop: true,
  delay: 50,
}}

/></h1>
<div className='grid grid-cols-1 gap-10 px-2 mt-15'>
  {
    jobArray.map(ja=>
      <>
      <div className='flex lg:flex-row flex-col justify-between border p-3 rounded-2xl shadow-md border-slate-600'>
        <h1 className='w-80 font-bold text-2xl'>{ja.title}</h1>
        <div className='flex justify-around w-80 text-xl'>
          <span>{ja.dept}</span> | 
           <span>{ja.type}</span>
        </div>
        <button className='btn bg-transparent border-slate-600'> Apply</button>
      </div>
      </>)
  }
</div>
</div>
    </div>
  )
}

export default Career