import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AboutManage = () => {
  const [refresh, setRefresh] = useState(false);

// save data to databse
const handleSave=(event)=>{
  event.preventDefault();
const form=event.target;
const name=form.name.value;
const designation1=form.designation1.value;
const designation2=form.designation2.value;
const age=form.age.value;
const expert=form.expert.value;
const photo_url=form.photo_url.value;

const teamCardData={name,designation1,designation2,age,expert,photo_url,}
fetch(`https://software-portfolio-tawny.vercel.app/teams`,{
  method: "POST",
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(teamCardData)
})
.then(res=>res.json())
.then(data=>{
 
  if (data.insertedId) {
    form.reset()
    setRefresh(!refresh);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your data has been saved',
      color:'white',
      background:'MediumSeaGreen',
      showConfirmButton: false,
      timer: 1500
    })
  }
})
}  
// delete from data base 
const handleDelete=(id)=>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then(result=>{
      if (result.isConfirmed) {
        fetch(`https://software-portfolio-tawny.vercel.app/delete/teams/${id}`,{
          method: "DELETE",

        })
        .then(res=> res.json())
        .then(data=> {
          if (data.deletedCount>0) {
            setRefresh(!refresh);
            Swal.fire(
              'Deleted!',
              'Your card has been deleted.',
              'success'
          )
   const remaining=data.filter(data=> data._id !== id);
   setData(remaining)
          }
        })
      }
    } )
}
// data getting from datatbase
const [data,setData]=useState([])

useEffect(() => {
  
    fetch(`https://software-portfolio-tawny.vercel.app/get/teams`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, [refresh]);
  return (
    <div className='mt-5 overflow-x-auto'>
    <h1 className='text-2xl text-center my-10'>About Management</h1>
      <div className=' grid grid-cols-2 gap-14'>
      <div className='part1'>
      <div > 
  <form onSubmit={handleSave} className='grid grid-cols-1  gap-5' >
  <input  name='name'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Name' required />
  <input  name='designation1'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='1st Designation' required />
  <input  name='designation2'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='2nd Designation' required />
  <input  name='age'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Age' required />
  <input  name='expert'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Experties' required />
  <input name='photo_url'   className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'   type="text" placeholder='Photo_Url' required />

  <input className='p-2 border-2 border-slate-400 w-1/3 rounded-3xl font-semibold cursor-pointer ' type="submit" value={"Save"} />
  </form>
 

    </div>
      </div>
      <div className='part2'>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
      {
        data?.map(cardData=>
          <div key={cardData._id}  className={` card my-5  bg-transparent lg:w-[90%] lg:h-[200px] shadow-xl  `}>
          <img src={cardData.photo_url} className='w-14 h-16 rounded-full' alt="service"/>
          <div className="card-body">
       
            
<h1  className="card-title"> {cardData.name}</h1>
            <p>{cardData.designation1}</p>
            <div className="card-actions gap-5 justify-end">
           <Link to={`/dashboard/editteamcard/${cardData._id}`} ><button>
           <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button></Link>
          <button onClick={()=>handleDelete(cardData._id)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          </button>
            </div>
          </div>
        </div>
        )
      }
 
    </div>
      </div>
      
    </div>
  </div>
  )
}

export default AboutManage