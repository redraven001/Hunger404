import React, { useContext } from 'react'
import UserContext from '../Utils/UserContext'

export default function ContactUs() {
  const {userName,setUserName,showContext}=useContext(UserContext);
  return (
    <div className="us-pages">
      <h1 className='text-center'>Contact Us...</h1>
      {showContext && <><input type='text' ty onChange={(e)=>setUserName(e.target.value)}></input> <div>UserName:{userName}</div></>}
    </div>
  )
}
