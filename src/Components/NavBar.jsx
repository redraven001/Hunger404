import React from 'react'
import logo from 'url:../assets/Images/hunger404_logo.png'
import '../Styles/navBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div id='navBarContainer'>
       <Link to={'/'}> <img id='logo-img' src={logo} alt='Logo' height={"80px"} width={"75px"}/></Link>
        <div id='nav-items'><ul>
            <li><Link to={'/'}> Home</Link></li>
             <li><Link to={'/about'}> About Us</Link></li>
            <li><Link to={'/groceries'}> Groceries</Link></li>
            <li><Link to={'/contact'}> Contact us</Link></li>
            <li><Link to={'/'}> Cart</Link></li>
        </ul></div>
    </div>
  )
}
