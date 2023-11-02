import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';

const AdminLogin = () => {
  // admin login
  const {signIn}=useContext(AuthContext)

  //error usestate
  const [error,SetError]=useState('')
// naviation element
  const location=useLocation();
  const navigate=useNavigate();
  const from=location?.state?.from?.pathname || '/'

  // login function
  const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result=>{
      navigate(from)
    })
    .catch(error=>{
     
      if (error.code === 'auth/missing-password)') {
         SetError('Password Field Empty');
       }
  else if (error.code === 'auth/wrong-password') {
         SetError('Incorrect password');
       }
       else if (error.code === 'auth/user-not-found') {
        SetError('Incorrect email')
       } 
       else if (error.code === 'auth/invalid-email') {
        SetError('Invalid email')
       } 
       else {
         SetError(error.message);
       }
      })
  }


  return (
    <div className='my-5 font-fancy'>
<div className='text-5xl'>Hello Admin</div>
<div className='lg:w-[50%] w-[100%] mt-20'>
  {/* login form */}
  <form  onSubmit={handleLogin} className='grid grid-cols-1 gap-5' >
<input  className='px-3 py-2 bg-transparent border border-slate-400 rounded-xl' type="text" name='email' placeholder='Put 
Admin Email' />
<input className='px-3 py-2 bg-transparent border border-slate-400  rounded-xl' type="password" name='password' placeholder='Put Anything' />
<input type="submit" value={"Boom"} className='btn' />
  </form>
</div>

    </div>
  )
}

export default AdminLogin