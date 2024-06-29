import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div> 
            <div className='producto'>
            <Link to={`/item/${producto.id}`}  className="link-producto">
                <img src={producto.imagen} className='img-producto' />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
            </Link>
                <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
