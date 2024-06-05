import { Link, NavLink } from "react-router-dom"
import categories from "../../data/categorias.json"

export const NavBar = () => {


  return (
    <nav className="nav">
        <ul className="nav-menu">
          <li>
          <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
          </li>
          {
            categories.map((category) => {
              return (
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
                  {category.nombre}
                  </NavLink>
              </li>
              )
            })
          }
        </ul>
    </nav>
  )
}
