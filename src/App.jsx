import React from "react";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./views/Home";
import Footer from "./componentes/footer/Footer";
import Register from "./views/Register";
import Login from "./views/Login";
import Cart from "./views/Cart";
import Pizzas from "./views/Pizzas";
import NotFound from "./views/NotFound";
import Profile from "./views/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Pizza/p001" element={<Pizzas />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
