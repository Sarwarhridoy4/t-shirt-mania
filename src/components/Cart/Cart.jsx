import React from "react";

const Cart = ({ cart, handelRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = (
      <img
        style={{ width: "150px" }}
        src='https://www.tharagold.in/assets/img/no-product-found.png'
        alt='no product found'
      />
    );
  }
  return (
    <div>
      <h2>Order summary</h2>
      <h5>Order Quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handelRemoveFromCart(tshirt)}>&#10060;</button>
        </p>
      ))}
      {message}
    </div>
  );
};

export default Cart;
