import React from 'react'
import {formatCurrency} from './format'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const total = 25000;
    const token = true;
  return (
    <nav className='containerNavbar'>
        <div className='d-flex'>
            <p>Pizzería Mamma Mia!</p>
            <Link to="/">
            <button className="buttonNav boton1" href="#">🍕Home</button>
            </Link>


            {token ? (
                <>
                <Link to="/Profile">
                <button className="buttonNav boton1" href="#">🔓Profile</button>
                </Link>
                <button className="buttonNav boton1" href="#">🔒Logout</button>
                </>
            ):(
                <>
                <Link to="/Login">
                <button className="buttonNav boton1" href="#">🔐Login</button>
                </Link>
                <Link to="/Register">
                <button className="buttonNav boton1" href="#">🔐Register</button>
                </Link>
                </>
            )}
      </div>
      <div>
      <Link to="/Cart">
        <button className="buttonNav botonCarrito" href="#"> 🛒Total: {formatCurrency(total)}</button>
        </Link>
        
      </div>



      
    </nav>
  )
}

export default Navbar
