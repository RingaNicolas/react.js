import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json"
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])

  return (
    <div className='contenedor-producto-detail'>{producto ? <ItemDetail producto={producto} /> : "Cargando..."}</div>
  )
}
