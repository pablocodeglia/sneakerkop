import { CartState } from "../Context/CartContext";
import classes from "./Cart.module.css";
import CartItem from "../UI/CartItem";

const Cart = () => {
  const { getCartTotal, countCartItems, cartItems } = CartState();

  return (
    <>
      <div className={classes["main-container"]}>
        <div className={classes["cartItems-container"]}>
          <h1>YOUR SHOPPING BAG</h1>
          <h3
            style={{ fontWeight: "400" }}
          >{`TOTAL (${countCartItems()} products) €${getCartTotal()}`}</h3>
          {cartItems.map((item) => (
            <CartItem item={item} key={`${item.id}-${item.size}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
