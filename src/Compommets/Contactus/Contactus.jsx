// import React, { useCallback, useState } from 'react'
// import Typewriter from 'typewriter-effect';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// // AIzaSyD2Je9cAeg8tfn2PmqmM4iCEDMTPY6PbAw

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 23.744120,
//   lng: 90.372810
// };

// const Contactus = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyD2Je9cAeg8tfn2PmqmM4iCEDMTPY6PbAw"
//   })

 


//   return (
//     <div className='my-5 font-fancy'>
// <h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
// options={{
//   strings: ['Get Connect', "With Us"],
//   autoStart: true,
//   loop: true,
//   delay: 50,
// }}

// /></h1>

// <div className='mt-10 grid lg:grid-cols-2 grid-cols-1'>
// <div > 
//   <form className='grid grid-cols-1  gap-5' method='POST' action="https://getform.io/f/c270765f-7cbe-4079-a9ce-d212a4002726">
//   <input  name='name'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Name' required />
//   <input name='email'   className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'   type="text" placeholder='Email' required />
//   <input  name='phone'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Phone' required />
//   <textarea name='inqery' className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl' type="text" placeholder='Inquery' required />
//   <input className='p-2 border-2 border-slate-400 w-1/3 rounded-3xl font-semibold cursor-pointer ' type="submit" value={"Let's Collaborate"} />
//   </form>
 

//     </div>
// <div>
// {isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
     
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }
// </div>
// </div>

//     </div>
//   )
// }

// export default Contactus

import React from 'react'
import Typewriter from 'typewriter-effect';


const Contactus = () => {


 


  return (
    <div className='my-5 font-fancy'>
<h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
options={{
  strings: ['Get Connect', "With Us"],
  autoStart: true,
  loop: true,
  delay: 50,
}}

/></h1>

<div className='mt-10 grid lg:grid-cols-2 grid-cols-1 gap-8'>
<div > 
  <form className='grid grid-cols-1  gap-5' method='POST' action="https://getform.io/f/c270765f-7cbe-4079-a9ce-d212a4002726">
  <input  name='name'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Name' required />
  <input name='email'   className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'   type="text" placeholder='Email' required />
  <input  name='phone'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Phone' required />
  <textarea name='inqery' className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl' type="text" placeholder='Inquery' required />
  <input className='p-2 border-2 border-slate-400 w-1/3 rounded-3xl font-semibold cursor-pointer ' type="submit" value={"Let's Collaborate"} />
  </form>
 

    </div>
<div className=''>
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9829365283863!2d90.36652027406367!3d23.747987888871364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf7a6e1f51ed%3A0x4a64eee94aacc6a7!2sdhanmondi%209%2FA!5e0!3m2!1sen!2sbd!4v1697829010647!5m2!1sen!2sbd"
    
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className='rounded-lg px-4 lg:w-[500px] h-[300px] mapAnim'
  ></iframe>
</div>
</div>

    </div>
  )
}

export default Contactus