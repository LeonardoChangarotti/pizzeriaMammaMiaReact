import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //BOOSTRAP POSIBLE EN REACT con npm install boostrap
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <AuthProvider>
         <App />
       </AuthProvider>
    </React.StrictMode> 
)

//NO TOCAR MAIN. SOLO AGREGAR LA LINEA DEL BOOSTRAP
// debo instalar boostrap con npm install boostrap sino no funciona