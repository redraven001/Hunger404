import React from 'react'
import logo from 'url:../assets/Images/hunger404_logo.png'
import '../Styles/navBar.css'

export default function NavBar() {
  return (
    <div id='navBarContainer'>
        <img id='logo-img' src={logo} alt='Logo' height={"80px"} width={"75px"}/>
        <div id='nav-items'><ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About Us</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''>Cart</a></li>
        </ul></div>
    </div>
  )
}
