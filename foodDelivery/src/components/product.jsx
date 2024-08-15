import React, { useContext } from 'react';
import "./home.css";
import { CartContext } from '../App';

const Product = ({ imgSrc, id, brand,count, price }) => {
  const { cart, setCart } = useContext(CartContext);

  const inCart = cart.some((item) => item.id === id);


  function toggleCart() {
    if (inCart) {
      setCart(cart.filter((item) => item.id !== id));

    } else {
      setCart([...cart, { id, brand, price,count, imgSrc }]);
    }
  }

  return (
    <div>
      <div className='card' key={id}>
        <img src={imgSrc} alt={brand} />
        <h3>{brand}</h3>
        <p>RS.{price}</p>
        <button onClick={toggleCart}>
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default Product;
