import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const ServiceManage = () => {
  const [refresh, setRefresh] = useState(false);

 
// adiing to database

const handleAdd=(event)=>{
  event.preventDefault();
const form=event.target;
const title=form.title.value;
const photo_url=form.photo_url.value;
const description=form.description.value;

const serviceCardData={title,photo_url,description}
fetch(`https://software-portfolio-tawny.vercel.app/services`,{
  method: "POST",
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(serviceCardData)
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



// delete card data from database

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
        fetch(`https://software-portfolio-tawny.vercel.app/delete/services/${id}`,{
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
  
    fetch(`https://software-portfolio-tawny.vercel.app/get/services`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
}, [refresh]);
  return (
  <div className='mt-5 overflow-x-auto'>
    <h1 className='text-2xl text-center my-10'>Service Management</h1>
      <div className=' grid grid-cols-2 gap-14'>
      <div className='part1'>
      <div > 
  <form onSubmit={handleAdd} className='grid grid-cols-1  gap-5' >
  <input  name='title'  className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'  type="text" placeholder='Title' required />
  <input name='photo_url'   className='py-3 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl'   type="text" placeholder='Photo_Url' required />
  
  <textarea name='description' className='py-4 px-4  outline-none bg-transparent border-2 border-slate-400 font-semibold rounded-xl' type="text" placeholder='Description' required />
  <input className='p-2 border-2 border-slate-400 w-1/3 rounded-3xl font-semibold cursor-pointer ' type="submit" value={"Add"} />
  </form>
 

    </div>
      </div>
      <div className='part2'>
      <div className=''>
      {
        data?.map(cardData=>
          <div key={cardData._id}  className={` card my-5  bg-transparent lg:w-[80%] lg:h-[250px] shadow-xl  `}>
          <figure><img src={cardData.photo_url} className='lg:w-[180px] object-cover lg:h-[350px]' alt="service"/></figure>
          <div className="card-body">
       
            
<h1  className="card-title"> {cardData.title}</h1>
            <p>{cardData.description}</p>
            <div className="card-actions justify-end">
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

export default ServiceManage