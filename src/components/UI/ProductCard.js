import { Link } from "react-router-dom";
import PriceTag from "./PriceTag";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className={classes.container}>
        <img
          src={props.img_url[0]}
          className={classes.thumb}
          alt={classes.name}
        ></img>
        <div>
          <div className={classes.brand}>{props.brand}</div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.price}>
            <PriceTag {...props} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
