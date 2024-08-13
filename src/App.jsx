//import "./App.css";
import React from "react";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./componentes/Home";
import Footer from "./componentes/footer/Footer";
import Register from "./componentes/Register";


function App() {
  return (
    <div>
      <Navbar />
      {/*<Home/>*/}
      <Register/>
      <Footer />
    </div>
  );
}

export default App;
