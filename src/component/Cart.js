import React from "react";
import { useCart } from "./CartContext"; // Adjust the path if necessary

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalItems = cartItems.length;
  const totalValue = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price), 0)
    .toFixed(2);

  return (
    <div>
      <h2>Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Value: ${totalValue}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
