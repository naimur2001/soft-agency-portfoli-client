import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const PrivateRoute = ({children}) => {
  // to check admin login or out
  const {user,loading}=useContext(AuthContext)
  const location=useLocation()
  if (loading) {
    return <div className='flex justify-center items-center relative '>
    <div className="  absolute top-44 radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "6rem", "--thickness": "2rem" }}>Not Possible</div>
  
    </div>
   }
 
   if (user) {
    return children;
   }
  

  return <>

  <Navigate to='/' state={{from: location}} replace ></Navigate>

  </>
};

export default PrivateRoute;