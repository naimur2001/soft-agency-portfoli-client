import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Dashboard/AuthProvider'

const Nav = () => {
const {user,logOut}=useContext(AuthContext)

// getting data from database
const [data,setData]=useState('')

useEffect(() => {
  if (user && user.email) {
    fetch(`http://localhost:5000/user/admin/${user?.email}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
}, [user?.email]);

const {role}=data
// console.log(role)

// signout function
const handleSignOut = ()=>{
  // logout from authprovider
logOut()
.then(result=>{

    })
    .catch(error=>{
      console.log(error);
    })
}
  const navElement=[
    //links for routing 
    <>
    <li>
      <Link  to={'/'} >Home</Link>
    </li>
    <li>
      <Link  to={'/services'} >Services</Link>
    </li>
    <li>
      <Link  to={'/aboutus'} >About Us</Link>
    </li>
    <li>
      <Link  to={'/contactus'} >Contact Us</Link>
    </li>
    <li>
      <Link  to={'/career'} >Career</Link>
    </li>

    {user && role==="admin" ?
   <>
    <li>
      <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      <li onClick={handleSignOut} >
        <Link>LogOut</Link>
      </li></>: "" }
   
    </>
  ]

  return (
    <div>
  <div className="navbar font-semibold font-rosario">
  <div className="justify-center w-[50%]">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navElement}
      </ul>
    </div>
    <Link to={'/'} ><img className='lg:w-28 lg:h-28  w-20 h-20 lg:ml-0 ml-20 ' src="../../public/es.png" alt="" /></Link>
    
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navElement}
    </ul>
  </div>

</div>
    </div>
  )
}

export default Nav