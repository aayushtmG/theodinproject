import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [itemsInCart, setItemsInCart] = useState([])

  const removeItemHandler = (itemId) => {
    setItemsInCart(itemsInCart.filter((item) => item.id !== itemId))
  }
  const resetStore = () => {
    setItemsInCart([])
  }
  return (
    <>
      <NavBar
        itemsInCart={itemsInCart}
        removeItemHandler={removeItemHandler}
        resetStore={resetStore}
      ></NavBar>
      <main className="mt-12">
        <Outlet context={[itemsInCart, setItemsInCart]}></Outlet>
      </main>
    </>
  )
}

export default App
