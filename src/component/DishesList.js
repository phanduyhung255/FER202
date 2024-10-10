import React from "react";
import { useCart } from "../component/CartContext"; // Adjust path if necessary

const DishesList = ({ dishes }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.name} - ${dish.price}
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishesList;
