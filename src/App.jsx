import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer"
import { NotFound } from "./components/NotFound"
import { Header } from "./components/header/Header"
import "./css/estilo.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Carrito } from "./components/Carrito"
import { CartProvider } from "./context/CartContext"
import { Checkout } from "./components/Checkout"
import { Footer } from "./components/Footer"
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizar-compra" element={<Checkout />} ></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
