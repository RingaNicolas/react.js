import { Link } from "react-router-dom"
import { Carrito } from "./Carrito"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="logo"><h1>RingaClothes</h1></Link>
        <NavBar />
        <Carrito />
    </header>
  )
}
