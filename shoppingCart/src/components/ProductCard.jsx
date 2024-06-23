import React, { useEffect, useState } from "react"
import Button from "./ui/Button"

function ProductCard({ product, onAddCart }) {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg space-y-4 flex flex-col bg-white max-w-[350px]  p-6">
        <img
          src={product.image}
          alt={product.title}
          className=" w-24 2xl:w-52 2xl:h-52  mx-auto object-contain"
        />
        <div className="flex flex-1  flex-col justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mb-4 text-justify">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2 ">
            <div className="flex p-1 justify-between items-center">
              <p className="2xl:text-xl font-semibold text-[#1a385e]">
                {" "}
                ${product.price}
              </p>
              <div>
                <label htmlFor="quantity">Qty:</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border  px-1 max-w-20"
                />
              </div>
            </div>
            <div>
              <Button
                className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300"
                onClick={() => onAddCart({ ...product, quantity })}
                title={"Add To Cart"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
