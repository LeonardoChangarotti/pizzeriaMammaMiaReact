import React from 'react'
import {formatCurrency} from './format'
import './navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = true;
  return (
    <nav className='containerNavbar'>
        <div className='d-flex'>
            <p>Pizzería Mamma Mia!</p>
            <button className="buttonNav boton1" href="#">🍕Home</button>


            {token ? (
                <>
                <button className="buttonNav boton1" href="#">🔓Profile</button>
                <button className="buttonNav boton1" href="#">🔒Logout</button>
                </>
            ):(
                <>
                <button className="buttonNav boton1" href="#">🔐Login</button>
                <button className="buttonNav boton1" href="#">🔐Register</button>
                </>
            )}
      </div>
      <div>
        <button className="buttonNav botonCarrito" href="#"> 🛒Total: {formatCurrency(total)}</button>
        
      </div>



      
    </nav>
  )
}

export default Navbar
/*    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
          <Button className="btn-sm" variant="outline-light" href="#home">
            🍕Home
          </Button>
          {token ? (
            <>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#profile"
              >
                🔓Profile
              </Button>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#Logout"
              >
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#Login"
              >
                🔐Login
              </Button>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#register"
              >
                🔐Register
              </Button>
            </>
          )}
        </Nav>
        {token && (
          <Button
            className="btn-sm" 
            variant="outline-info"
            href="#total"
          >
            🛒Total: {formatCurrency(total)}
          </Button>
        )}
      </Container>
    </Navbar>
  );
}*/