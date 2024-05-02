import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'

import cart_icon from'../Assets/cart_icon.png'
import './NavBarr.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const NavBar = () => {
    const[menu,setMenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>(setMenu("shop"))}><Link style={{color:"black", textDecoration:"none"}} to="/">Home </Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("men"))}><Link style={{color:"black", textDecoration:"none"}}  to="/men">Men</Link> {menu==="men"?<hr/>:<></>} </li>
            <li onClick={()=>(setMenu("women"))}><Link style={{color:"black", textDecoration:"none"}}  to="/women">Women</Link> {menu==="women"?<hr/>:<></>} </li>
            <li onClick={()=>(setMenu("kids"))}><Link style={{color:"black", textDecoration:"none"}}  to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{color:"black", textDecoration:"none"}}  to="/login"><button>Login</button></Link>
            <Link style={{color:"black", textDecoration:"none"}}  to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
