import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import BarRechart from './BarRechart';
import BarRechart2 from './BarRechart2';


const Dashboard = () => {
  const location=useLocation();
  const noHeading = location.pathname.includes('/dashboard/') 

  return (
    <div className='font-fancy  ' >

<>
<div className="drawer ">

  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}

    <div className="w-full navbar bg-transparent font-semibold">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 font-semibold px-2 mx-2 lg:h-28   h-20">
        <Link to={'/dashboard'}>Dashboard</Link>
        </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/dashboard'}>Dashboard Home</Link></li>
          <li><Link to={'/dashboard/servicemanagement'}>Service Management</Link></li>
          <li><Link to={'/dashboard/aboutmanagement'}>About Management</Link></li>
          {/* <li><Link to={'/dashboard/clientmanagement'}>Client Management</Link></li> */}
           
        </ul>
      </div>
    </div>
    {/* Page content here */}

{
    
  noHeading ||  <h1 className='text-center text-4xl mb-5 '>Welcome To Dashboard</h1>
}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/dashboard'}>Dashboard Home</Link></li>
          <li><Link to={'/dashboard/servicemanagement'}>Service Management</Link></li>
          <li><Link to={'/dashboard/aboutmanagement'}>About Management</Link></li>
          {/* <li><Link to={'/dashboard/clientmanagement'}>Client Management</Link></li> */}
           
    </ul>
  </div>
</div>
</>
<Outlet></Outlet>
<div className='grid grid-cols-1 '>
  <BarRechart></BarRechart>
<BarRechart2></BarRechart2>
</div>

    </div>
  )
}

export default Dashboard