import React from 'react'
import Marquee from "react-fast-marquee";
import Typewriter from 'typewriter-effect';
const Section3 = () => {
  const brand_images = [
    {
        "name": "Apple",
        "image_url": "https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png",
    },
    {
        "name": "Google",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
    },
    {
        "name": "Microsoft",
        "image_url": "https://www.transparentpng.com/thumb/windows/7Pqun8-download-windows-logo-emblem-png.png",
    },
    {
        "name": "Amazon",
        "image_url": "https://www.transparentpng.com/thumb/ipl-logo-transparent-images/amazon-ipl-logo-png-transparent-images-7.png",
    },
    {
        "name": "Tesla",
        "image_url": "https://www.transparentpng.com/thumb/tesla/6g0DrE-tesla-logo-png-picture.png",
    },
    
    {
        "name": "Coca-Cola",
        "image_url": "https://www.transparentpng.com/thumb/coca-cola/RuCgLI-coca-cola-transparent-picture.png",
    }
   
]

  return (
    <div className='my-5 font-fancy'>
      <h1 className='mt-10 mb-5 text-3xl text-center font-semibold text-slate-600'><Typewriter
  options={{
    strings: ['Our Beloved', "Clients"],
    autoStart: true,
    loop: true,
    delay: 50,
  }}
/></h1>
      
      <Marquee
    pauseOnHover='true'
     speed={40}
   
    >
   <div className='flex gap-20 my-10'>
{
  brand_images.map((ba,index)=>
  <img key={ba.name} src={ba.image_url} className='w-28 h-28 '  alt="" />
  )
}
   </div>
  </Marquee></div>
  )
}

export default Section3