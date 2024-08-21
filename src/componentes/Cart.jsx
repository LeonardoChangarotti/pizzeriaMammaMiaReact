import React, { useState } from 'react';
import pizzas from './pizza'; // Importa el array de pizzas
import "../componentes/cart.css"; 

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 1 })));

  const handleIncrease = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.filter(item => item.quantity > 0).map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} className="cart-img" />
          <h3>{pizza.name}</h3>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <div className="cart-buttons">
            <button onClick={() => handleIncrease(pizza.id)}>+</button>
            <button onClick={() => handleDecrease(pizza.id)}>-</button>
          </div>
        </div>
      ))}
      <h2 className="cart-total">Total: ${total}</h2>
      <div className="text-end mt-3">
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;

