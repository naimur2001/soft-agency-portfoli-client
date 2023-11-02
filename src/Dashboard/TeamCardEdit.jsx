import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const TeamCardEdit = () => {
  const [refresh,setRefresh]=useState(false)
  const data=useLoaderData()
  const {name,designation1,designation2,age,expert,photo_url,_id}=data
const handleEdit=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const designation1=form.designation1.value;
  const designation2=form.designation2.value;
  const age=form.age.value;
  const expert=form.expert.value;
  const photo_url=form.photo_url.value;
  
  const editCardData={name,designation1,designation2,age,expert,photo_url,}
  fetch(`http://localhost:5000/patch/teams/${_id}`,{
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(editCardData)
    })
    .then(res=> res.json())
    .then(data=> {
      if (data.modifiedCount>0) {   
        setRefresh(!refresh)    
        Swal.fire({
          title: 'Success!',
          text: 'Team card Info Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          })
      }
    })
}
//data fetch by id 
const [cardData,setCardData]=useState([])

useEffect(() => {
  
  fetch(`http://localhost:5000/get/teams/${_id}`)
      .then(res => res.json())
      .then(data => setCardData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, [refresh]);

  return (
  <div className=' grid grid-cols-2 gap-14'>
      <div className='part1'>
      <div > 
  <form onSubmit={handleEdit} className='grid grid-cols-1  gap-5' >
  <input  name='name'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Name'  defaultValue={name}  required />
  <input  name='designation1'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='1st Designation'  defaultValue={designation1}  required />
  <input  name='designation2'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='2nd Designation'  defaultValue={designation2}  required />
  <input  name='age'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Age'  defaultValue={age}  required />
  <input  name='expert'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Experties'  defaultValue={expert}  required />
  <input name='photo_url'   className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'   type="text" placeholder='Photo_Url'  defaultValue={photo_url}  required />

  <input className='p-2 border-2 border-slate-400 w-1/3 rounded-3xl font-semibold cursor-pointer ' type="submit" value={"Update"} />
  </form>
 

    </div>
      </div>
      <div className='part2'>
      <div className=''>
      
  
          <div  className={` card my-5  bg-gradient-to-r from-green-300 to-red-200 w-[100%] h-[400px] shadow-xl  `}>
          <img src={cardData.photo_url} className='w-40 h-40 rounded-full' alt="service"/>
          <div className="card-body">     
          <label htmlFor="">Name : <span className='font-semibold text-xl'>{cardData.name}</span></label>      
          <label htmlFor="">1st Designation : <span className='font-semibold text-xl'>{cardData.designation1}</span></label>      
          <label htmlFor="">2nd Designation : <span className='font-semibold text-xl'>{cardData.designation2}</span></label>      
          <label htmlFor="">Experties : <span className='font-semibold text-xl'>{cardData.expert}</span></label>      
          <label htmlFor="">Age : <span className='font-semibold text-xl'>{cardData.age}</span></label>      
          
           
          </div>
        </div>
        
      
 
    </div>
      </div>
      
    </div>
  )
}

export default TeamCardEdit