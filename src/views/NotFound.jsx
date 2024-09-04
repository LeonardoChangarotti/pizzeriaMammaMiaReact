import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Página No Encontrada</h2>
      <p>Lo sentimos, ha ocurrido un error o la página que buscas no existe.</p>
     
        <button  className="btn btn-primary mb-2">
        Volver al Menú Inicial
        </button>
      
    </div>
  )
}

export default NotFound
//falta agregar el link para que vuelva a pagina principal
