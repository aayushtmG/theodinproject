import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoMdCart } from "react-icons/io"
import CartItem from "./CartItem"
import TotalPrice from "./TotalPrice"
import Button from "./ui/Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function NavBar({ itemsInCart }) {
  const [total, setTotal] = useState(0)
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

        <Sheet>
          <SheetTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg focus:outline-none ">
            <IoMdCart className="text-2xl  ml-3 hover:text-secondary cursor-pointer transition-colors ease-out duration-300"></IoMdCart>
            <span className="sr-only">Notifications</span>
            <span
              className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-secondary border-2 border-white rounded-lg -top-1 -end-2 "
              id="waht"
            >
              {itemsInCart.length}
            </span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Items in cart:</SheetTitle>
              <SheetDescription>
                {itemsInCart.length > 0 &&
                  itemsInCart.map((item) => (
                    <CartItem product={item}></CartItem>
                  ))}
              </SheetDescription>
            </SheetHeader>
            <TotalPrice total={total}></TotalPrice>
            <Button title="Buy" onClick={() => {}} />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
