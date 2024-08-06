import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //BOOSTRAP POSIBLE EN REACT con npm install boostrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//NO TOCAR MAIN. SOLO AGREGAR LA LINEA DEL BOOSTRAP
// debo instalar boostrap con npm install boostrap sino no funciona