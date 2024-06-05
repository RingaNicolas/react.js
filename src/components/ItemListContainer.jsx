import { useEffect, useState } from "react"
import data from "../data/productos.json"
import categories from "../data/categorias.json"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] =useState("Productos");

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {

    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        } else {
          setTitulo("Productos");
          setProductos(res);
        }
      })

      if (categoryId) {

      } else {
       
      }
  }, [categoryId]);

  return (
    <div className="items-container">
      <h1 className="titulo">{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}
