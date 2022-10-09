import { useState } from "react";
import PriceTag from "./PriceTag";
import classes from "./ProductDetails.module.css";
import { CartState } from "../../components/Context/CartContext";

const ProductDetailTab = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const cartState = CartState();

  const changeSize = (e) => {
    setSelectedSize(e.target.value);
    e.target.className = `${classes.sizesBtnSelected}`;
  };

  const addToCartHandler = (e) => {
    selectedSize !== ""
      ? cartState.addToCart(props.id, selectedSize)
      : console.log("select a size first");
    console.log("item count: ", cartState.countCartItems());
  };

  return (
    <>
      <section className={classes["product-details"]}>
        <div>
          <h1>Details</h1>
          <div className={classes.brand}>{props.brand}</div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.price}>
            <PriceTag {...props} />
          </div>
          <div className={classes.description}>{props.description}</div>

          <div className={classes["sizes-container"]}>
            {props.sizes.map((size) => (
              <button
                key={size}
                disabled={props.availability[size] > 0 ? false : true}
                className={
                  +selectedSize === size
                    ? `${classes.sizesBtn}  ${classes.selectedBtn}`
                    : `${classes.sizesBtn}`
                }
                onClick={changeSize}
                value={size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className={classes.addtocartBtn} onClick={addToCartHandler}>
          + ADD TO CART
        </button>
      </section>
    </>
  );
};

export default ProductDetailTab;
