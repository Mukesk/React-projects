import React, { useState } from 'react';
import data from '../assets/src.json';
import  "./home.css"
import Product from "./product.jsx"


const Home = () => {
  
  return (
    <>
    <div className="crd">
    {data.foodItems.map((value) => (
      <Product  key={value.id} id={value.id} brand={value.brand} count={value.count} price={value.price} imgSrc={value.imgSrc} />
    ))}
    </div>//end
    </>
  );
}

export default Home;
