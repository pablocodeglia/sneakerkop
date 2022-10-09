import dummyCatalog from "../../data/dummyCatalog.json";
import PriceTag from "./PriceTag";
import classes from "../Pages/Cart.module.css";
import { CartState } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const cartState = CartState();

  const removeItemHandler = () => {
    cartState.removeProductFromCart(item.id, item.size);
  };

  console.log("passed item: ", item.id, item.size);
  const itemData = dummyCatalog.find((obj) => {
    return obj.id === item.id;
  });

  return (
    <>
      <div className={classes["cart-item"]}>
        <div className={classes["cart-item-thumb"]}>
          <img
            src={itemData.img_url[0]}
            className={classes.thumb}
            alt={itemData.name}
          />
        </div>
        <div className={classes["cart-item-details"]}>
          <span style={{ fontWeight: "400" }}>{itemData.brand}</span>
          <span style={{ float: "right" }}>
            <PriceTag
              price={itemData.price}
              isOnSale={itemData.isOnSale}
              salePrice={itemData.salePrice}
            />
          </span>
          <h3 style={{ marginTop: "0px" }}>
            <Link to={`/product/${item.id}`}>{itemData.name}</Link>
          </h3>
          <h3 style={{ fontWeight: "400" }}>
            <p>
              Size {item.size}
              <br />
              Quantity: {item.qty}
            </p>
          </h3>
          <br />
        </div>
        <div className={classes["remove-icon"]}>
          <button onClick={removeItemHandler}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M31.3,1v30.3H1V1H31.3 M32.3,0H0v32.3h32.3V0L32.3,0z" />
              <polygon points="26.9,6.6 25.6,5.3 16,14.9 6.4,5.3 5.1,6.6 14.7,16.2 5.1,25.7 6.4,27 16,17.5 25.6,27 26.9,25.7 17.3,16.2 " />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
