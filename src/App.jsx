//import "./App.css";
import React from "react";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./componentes/Home";
import Footer from "./componentes/footer/Footer";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import Cart from "./componentes/Cart";
import Pizzas from "./componentes/Pizzas";


function App() {
  return (
    <div>
      <Navbar />
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      {/*<Cart />*/}
      <Pizzas />
      <Footer />
      
    </div>
  );
}

export default App;
