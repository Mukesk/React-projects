import data from './assets/src.json'
import React, { createContext, useState } from 'react'
import {  
  BrowserRouter ,  
  Routes,  
  Route

}   
from 'react-router-dom'



import Home from './components/home'
import Cart from './components/cart'

import Navbar from './components/Navbar'

export const CartContext=createContext([])
const App = () => {
  const [cart,setCart]=useState([])
  
  return (
    <>
     <CartContext.Provider value={{cart:cart,setCart:setCart}}>
      <BrowserRouter>
       <Navbar/ >
       <br></br><br></br> <br></br><br></br>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
       </Routes>       
      </BrowserRouter>
      </CartContext.Provider>   

     
    </>
  )
}

export default App
