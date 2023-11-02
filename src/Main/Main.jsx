import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../CommonFolder/Nav';
import Footer from '../CommonFolder/Footer';
const Main = () => {
  const location=useLocation();
  const noHeaderFooter=location.pathname.includes('*' && 'dashboard')
  return (
    <div className=''>
      {noHeaderFooter || <Nav></Nav> }
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main