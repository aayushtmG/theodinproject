import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import { useState, useEffect, createContext } from "react"

export const ShopContext = createContext({
  itemsInCart: [],
  resetStore: () => {},
  removeItemHandler: () => {},
  setItemsInCart: () => {},
})

function App() {
  const [itemsInCart, setItemsInCart] = useState([])

  const removeItemHandler = (itemId) => {
    setItemsInCart(itemsInCart.filter((item) => item.id !== itemId))
  }
  const resetStore = () => {
    setItemsInCart([])
  }
  return (
    <ShopContext.Provider
      value={{ itemsInCart, resetStore, removeItemHandler, setItemsInCart }}
    >
      <NavBar></NavBar>
      <main className="mt-12">
        <Outlet></Outlet>
      </main>
    </ShopContext.Provider>
  )
}

export default App
