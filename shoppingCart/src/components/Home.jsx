import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"

export default function Home() {
  const [ref, inView] = useInView({ threshold: 0, delay: 1 })
  return (
    <div className="h-[800px] grid place-items-center  ">
      <div ref={ref}>
        <h1
          className={`${
            inView ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          } 2xl:text-8xl font-poetsen  transition-all ease-out duration-&lsqb;1.5s&rsqb `}
        >
          The Fake Store
        </h1>
        <p
          className={`${
            inView ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          } tracking-wider italic text-lg text-black/80 transition-all ease-out duration-&lsqb;1.2s&rsqb `}
        >
          Nothing can be more fake than this
        </p>
        <button
          className={`${
            inView ? "translate-x-0 opacity-100 " : "-translate-x-20 opacity-0 "
          } bg-secondary text-white py-1 px-6 rounded-md hover:bg-primary duration-300  hover:text-black hover:border-black border border-secondary transition-all ease-out mt-4   `}
        >
          <Link to="/store" className="2xl:text-xl">
            Visit Store
          </Link>
        </button>
      </div>
    </div>
  )
}
