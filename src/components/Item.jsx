import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <Link to={`/item/${producto.id}`} className="link-producto">
            <div className='producto'>
                <img src={producto.imagen} className='img-producto' />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>

            </div>
        </Link>
    )
}
