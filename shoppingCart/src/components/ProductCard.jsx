import React, { useEffect, useState } from "react"

function ProductCard({ product }) {
  return (
    // <div className="shadow-md bg-white rounded-md overflow-hidden max-w-[300px] p-4">
    //   <img src={product.image} alt={product.title} className="w-40 mx-auto" />
    //   <div className="p-4">
    //     <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
    //     <p className="text-sm text-gray-600">{product.description}</p>
    //     <p className="text-lg font-semibold text-blue-500">${product.price}</p>
    //   </div>
    // </div>
    <>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-[300px] p-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 mx-auto object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="2xl:text-xl font-semibold text-[#1a385e]">
              ${product.price}
            </p>
            <button className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
