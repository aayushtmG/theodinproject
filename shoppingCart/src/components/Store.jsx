import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { useOutletContext } from "react-router-dom"

function Store() {
  const [itemsInCart, setItemsInCart] = useOutletContext()
  const [isLoaded, setIsLoaded] = useState(false)
  const [productList, setProductList] = useState([])
  useEffect(() => {
    setIsLoaded(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json)
      })
  }, [])

  const onAddCart = (product) => {
    const existingProduct = itemsInCart.find((item) => item.id == product.id)
    if (!existingProduct) {
      console.log("first time")
      return setItemsInCart((items) => [...items, product])
    }
    existingProduct.quantity += Number(product.quantity)

    setItemsInCart(
      itemsInCart.map((item) =>
        item.id == existingProduct.id ? { ...existingProduct } : item
      )
    )
  }

  return (
    <div
      className="h-screen 
    "
    >
      <div className="text-center">
        <h1
          className={`${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          } transition-all ease-out duration-700 2xl:text-3xl font-poetsen `}
        >
          Store
        </h1>
      </div>
      <div className="md:my-10 p-6 grid max-sm:place-items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8  ">
        {productList.length > 0
          ? productList.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                onAddCart={onAddCart}
              ></ProductCard>
            ))
          : null}
      </div>
    </div>
  )
}

export default Store
