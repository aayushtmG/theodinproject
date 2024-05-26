import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

function Store() {
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
      <div className="my-10 p-6 grid 2xl:grid-cols-5 gap-8  ">
        {productList.length > 0
          ? productList.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))
          : null}
      </div>
    </div>
  )
}

export default Store
