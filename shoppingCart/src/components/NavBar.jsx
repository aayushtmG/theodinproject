import React from "react"
import { Link } from "react-router-dom"
import { IoMdCart } from "react-icons/io"

export default function NavBar() {
  return (
    <header className="flex justify-between container mx-auto p-2">
      <h1 className="2xl:text-2xl font-semibold font-poetsen tracking-wide hover:animate-pulse cursor-pointer">
        FakeStore
      </h1>
      <nav className="flex  items-center">
        <ul
          className="2xl:text-xl space-x-4
         "
        >
          <Link
            to="/"
            className="hover:text-secondary transition-colors ease-out duration-300"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="hover:text-secondary transition-colors ease-out duration-300"
          >
            Store
          </Link>
        </ul>
        {/* <IoMdCart className="text-2xl ml-8 hover:text-secondary cursor-pointer transition-colors ease-out duration-300"></IoMdCart> */}

        <button
          type="button"
          class="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg focus:outline-none "
        >
          {/* <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg> */}
          <IoMdCart className="text-2xl ml-8 hover:text-secondary cursor-pointer transition-colors ease-out duration-300"></IoMdCart>
          <span class="sr-only">Notifications</span>
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-secondary border-2 border-white rounded-lg -top-1 -end-2 ">
            0
          </div>
        </button>
      </nav>
    </header>
  )
}
