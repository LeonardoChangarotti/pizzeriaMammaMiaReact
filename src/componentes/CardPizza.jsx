
import React from 'react';
import "../componentes/cardPizza.css"; // Asegúrate de crear este archivo CSS para los estilos

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="pizza-img" />
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Ingredientes: {ingredients.join(', ')}</p>
      <div className="buttons">
        <button className="btn3">Ver más</button>
        <button className="btn4">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
