import { useState } from "react";
import classes from "./ProductTabs.module.css";

const ProductTabs = (props) => {
  const [whoIsActive, setWhoIsActive] = useState("details");

  const checkClick = (e) => {
    setWhoIsActive(e.target.id);
    props.switchTab(e.target.id);
  };

  return (
    <>
      <section className={classes["tabs-container"]}>
        <div
          id="customize"
          className={
            whoIsActive === "customize"
              ? `${classes.tabs} ${classes.activetabs}`
              : `${classes.tabs}`
          }
          onClick={checkClick}
        >
          CUSTOMIZE
        </div>
        <div
          id="details"
          className={
            whoIsActive === "details"
              ? `${classes.tabs} ${classes.activetabs}`
              : `${classes.tabs}`
          }
          onClick={checkClick}
        >
          DETAILS
        </div>
      </section>
    </>
  );
};

export default ProductTabs;
