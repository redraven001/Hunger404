import React from 'react'
import { Link } from 'react-router-dom'
import offline from 'url:../assets/Images/offline.png'

export default function Offline() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <h2 className='text-center'>Looks like you are offline!!</h2>
    <Link to='/'><img height={"500px"} width={"350px"} src={offline}></img></Link>
    </div>
  )
}
