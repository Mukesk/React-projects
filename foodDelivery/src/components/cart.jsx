import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';
import "./cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    
    const amount = cart.reduce((acc, cur) => (cur.price * cur.count) + acc, 0);
    setTotalAmount(amount);
  }, [cart]);

  const handleRemove = (index) => {
   
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCountChange = (index, delta) => {

    const newCart = cart.map((item, i) => 
      i === index ? { ...item, count: Math.max(item.count + delta, 1) } : item
    );
    setCart(newCart);
  };

  if (cart.length === 0) {
    return <h3>NO ITEMS IN CART!</h3>;
  }

  return (
    <>
      {cart.map((item, index) => (
        <div className='main' key={index}>
          <div className="cont">
            <div className='sub'>
              <img src={item.imgSrc} alt={item.brand} />
              <h5>{item.brand}</h5>
              <p>Rs.{item.price}</p>
            </div>
            <div className="sub2">
              <button className='but1' onClick={() => handleRemove(index)}>Remove</button>
              <div className='counter'>
                <button onClick={() => handleCountChange(index, 1)}>+</button>
                <p>{item.count}</p>
                <button onClick={() => handleCountChange(index, -1)}>-</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="amount">
        <h3>TOTAL AMOUNT: Rs.{totalAmount}</h3>
        <button>Place Order</button>
      </div>
    </>
  );
};

export default Cart;
