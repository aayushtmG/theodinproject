import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [itemsInCart, setItemsInCart] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setItemsInCart(json)
      })
  }, [])
  return (
    <>
      <NavBar itemsInCart={itemsInCart}></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
