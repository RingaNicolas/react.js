import { useContext } from "react"
import { Cart2 } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext)

  return (
    <Link className="carrito" to="/carrito">
      <Cart2 color="#30BCED"/> {calcularCantidad()}
    </Link>
  )
}
