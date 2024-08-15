import React, { useState } from 'react';
import data from '../assets/src.json';
import  "./home.css"
import Product from "./product.jsx"


const Home = () => {
  const [cout,setCout]=useState(1);
  return (
    <>
    <div className="crd">
    {data.foodItems.map((value) => (
      <Product  id={value.id} brand={value.brand} count={value.count} price={value.price} imgSrc={value.imgSrc} />
    ))}
    </div>
    </>
  );
}

export default Home;
