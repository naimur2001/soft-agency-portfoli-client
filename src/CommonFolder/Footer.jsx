import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    // footer is static//
    <div className='mt-24 border-t-2 border-slate-400 font-fancy'>
<h1 className='text-4xl my-5'>Want to talk to us?
</h1>
<h1 className='lg:text-7xl text-4xl font-semibold text-slate-500 my-10'>hello@esraqify.com</h1>
<div className='grid lg:grid-cols-2 grid-cols-1   font-semibold'>
  <div><h1 className='text-2xl my-5'>We Are Here
</h1>
<h1>9/A Dhanmondi,  Dhaka - 1205,
Bangladesh</h1></div>

<div>
  <h1 className='text-2xl my-5'>Follow Us</h1>
  <div className='flex gap-10 text-xl'><svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></div>
</div>
</div>
{/* admin can log in by clicking esraqify link */}
<div className='mt-10 font-medium'>© 2018 - 2023 <Link to={'/adminlogin'}>ESRAQIFY</Link>.

Privacy Policy</div>
    </div>
  )
}

export default Footer