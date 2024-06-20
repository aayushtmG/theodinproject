import CartItem from "./CartItem"
import TotalPrice from "./TotalPrice"
import Button from "./ui/Button"

const CartList = ({ itemList, total }) => {
  return (
    <div
      className="max-h-full overflow-scroll mt-6 pr-2 pb-2"
      id="cartitem-container"
    >
      {itemList.length > 0 &&
        itemList.map((item) => (
          <CartItem
            product={item}
            key={item.id}
            quantity={item.quantity}
          ></CartItem>
        ))}
      <TotalPrice total={total} />
      <Button title={"Buy"} onClick={() => {}}></Button>
    </div>
  )
}

export default CartList
