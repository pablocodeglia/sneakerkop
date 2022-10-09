import { useState } from "react";
import classes from "../UI/ProductDetailTab.module.css";

const SizingButton = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  console.log(props);

  const onClickHandler = () => {
    setIsSelected(true);
  };

  return (
    <>
      <input
        type="radio"
        id={props.size}
        className={classes.sizesBtn}
        name="sizes"
        value={props.size}
        disabled={props.availability[props.size] > 0 ? false : true}
      />
      <label className={classes.sizesBtn} htmlFor={props.size}>
        {props.size}
      </label>
    </>
  );
};

export default SizingButton;

{
  /* <button
      
      name="sizes"
      className={classes.sizesBtn}
      //   className={
          //     isSelected ? `${classes.sizesBtnSelected}` : `${classes.sizesBtn}`
          //   }
          onClick={onClickHandler}
          value={props.size}
          >
      {props.size} {isSelected}
    </button> 
        </>

<input type="radio" id="radioleft" name="align" value="left"/>
<label className="e-btn" htmlFor="radioleft">Left</label> */
}
