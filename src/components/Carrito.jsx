import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Trash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)

  let index;

  return (
    <div className='container-carrito'>
      <h1 className='titulo-carrito'>Carrito</h1>
      <div className='container-carrito-cols'>
        <div className='cols-carrito'>
          {carrito.map((prod) => {
            return (
              <div key={prod.id} className="producto-carrito">
                <img src={prod.imagen} alt={prod.nombre} className='imagen-carrito' />
                <h2> {prod.nombre}: ${prod.precio} </h2>
                <button onClick={() => { eliminarProducto(prod) }} className='btn-eliminar'><Trash color='#30BCED'></Trash></button>
              </div>
            )
          })}
        </div>
        {
          carrito.length > 0 ?
            <div className='cols-carrito'>
              <p>Cantidad de productos: {carrito.length} </p>
              {carrito.map((prod) => {
                return (
                  <p className='parrafo-carrito'>Producto {carrito.findIndex(i => i.nombre === prod.nombre) + 1}: ${prod.precio} </p>
                )
              })}
              <h2 className='total'>Total: ${calcularTotal()} </h2>
              <button onClick={vaciarCarrito} className='btn-carrito'>Vaciar carrito</button>
              <Link to="/finalizar-compra">
                <button className='btn-carrito' >Finalizar compra</button>
              </Link>
            </div> :
            <h2>Carrito vacío</h2>
        }
      </div>
    </div>
  )
}
