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
        console.log(json)
        setProductList(json)
      })
  }, [])
  const product = {}
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
      <div className="border m-2 ">
        <ProductCard product={product}></ProductCard>
      </div>
    </div>
  )
}

export default Store
