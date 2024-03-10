import React, { useEffect } from 'react'
import Netflix_logo from '../Assets/Logo.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from "react-redux"
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=>
  {
    signOut(auth)
    .then(()=>{})
    .catch((error)=> navigate('/error'));
  }
  useEffect(()=>
  {
      onAuthStateChanged(auth, (user)=>
      {
          if(user)
          {
              const{uid,email,userName}=auth;
              dispatch(addUser({
                uid:uid,
                email:email,
                userName:userName
              }));
            navigate("/browse"); 
          }
          else{
              // User signed out
              dispatch(removeUser());
              navigate("/");
          }

      })
  },[])
  return (
    <div className='z-10 absolute w-[100%] px-12 py-2 bg-gradient-to-b from-black flex justify-between items-center'>
     
     <img src={Netflix_logo} alt='Netflix_logo'className='h-[80px]'></img>
     {
        user  &&
      <div className='flex justify-between gap-4'>
      <img alt='alternative img'></img>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
     }
     
    </div>
  )
}

export default Header