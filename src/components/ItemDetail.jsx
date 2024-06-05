import React from 'react'

export const ItemDetail = ( {producto} ) => {
    return (
        <div className='producto-detail'>
            <img src={producto.imagen} className='img-producto'/>
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
        </div>

    )
}
