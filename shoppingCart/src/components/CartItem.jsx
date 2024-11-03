import React, { useEffect, useState } from "react"

function CartItem({ product, quantity, removeItemHandler, bought }) {
  // const [product, setProduct] = useState({})
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       setProduct(json[0])
  //     })
  // }, [])
  return (
    <>
      {product && (
        <div className="my-4 rounded-lg   shadow-lg space-y-4  flex flex-col bg-white relative   p-4">
          <div className="flex gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 2xl:w-20  object-contain"
            />
            <div className="break-all w-full">
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p>x {quantity || 1}</p>
              <div className="flex flex-col items-start  md:flex-row md:items-center justify-between ">
                <p className="2xl:text-xl font-semibold text-[#1a385e]">
                  ${product.price}
                </p>
                {bought ? null : (
                  <button
                    className="text-sm 2xl:text-md hover:text-red-500"
                    onClick={() => removeItemHandler(product.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CartItem
