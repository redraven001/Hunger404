import React from 'react'
import { Link } from 'react-router-dom'
import commingSoon from 'url:../assets/Images/comingSoon.png'

export default function Groceries() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <img src={commingSoon} height={"600px"} width={"50%"}/>
        <Link to={'/'} className='mt-1'>GO Back</Link>
    </div>
  )
}
