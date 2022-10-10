import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  // Load data for showing on UI
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  // function for adding product to the cart
  const handelAddToCart = (tshirt) => {
    // Avoiding duplicate product from adding to cart
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("item already added!");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      alert("product successfully added to cart!");
    }
  };
  //function for removing item from the cart.
  const handelRemoveFromCart = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };
  return (
    <div className='home-container'>
      <div className='t-shirt-container'>
        {tshirts.map((ts) => (
          <Tshirt
            key={ts._id}
            tshirt={ts}
            handelAddToCart={handelAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
