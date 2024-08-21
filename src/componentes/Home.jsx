import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from './pizza'; 
//IMPORTAR HEADER Y CARDS 



const Home = () => {
  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
