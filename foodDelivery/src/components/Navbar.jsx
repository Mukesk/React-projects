import React from 'react'
import "./navbar.css"
import logo from "/food/logo.png"
import {Link} from "react-router-dom"
import homelogo from "/photo/home.svg"
import cartlogo from "/photo/cart.svg"
import { useContext } from 'react'
import { CartContext } from '../App';

const   Navbar = () => {
  const { cart} = useContext(CartContext);
  return (
    <>
    <div className='container'>
        <div className='c_logo'>
           <h2 >BiteMe</h2>
           <img  src={logo} className='logo'/>
        </div>
        <nav>
        <div className='hom'>
          <img src={homelogo}></img>
        <Link to={"/BiteMe" }>Home</Link>
        </div>
        <button> {cart.length}</button>
        <div className='hom'>
        <img src={cartlogo}></img>

        <Link to={"/cart"} >Cart</Link>
        </div>
       
        </nav>
        
    </div>
    </>
  )
}

export default Navbar
