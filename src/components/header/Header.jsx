import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { NavBar } from "./NavBar"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Header = () => {

  return (
    <header className="header">
        <Link to="/" className="logo"><h1>RingaClothes</h1></Link>
        <NavBar />
        <CartWidget/>
    </header>
  )
}
