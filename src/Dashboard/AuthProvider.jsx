import { createContext } from "react";
import app from "./firebase.config";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
export  const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider=({children})=>{
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true);


const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password);
}
// signin
const signIn=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}
// logout
const logOut=()=>{
  setLoading(true);
  return signOut(auth);
}
// check user logged in or out
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
    setUser(loggedUser);
    setLoading(false);
  })
  return ()=>{
    unsubscribe();
  }
},[])


const authInfo={
  user,
  loading,
  createUser,
  signIn,
  logOut,
 }
return(
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
)
}

export default AuthProvider