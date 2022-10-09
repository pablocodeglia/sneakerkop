import { useState } from "react";
import { useParams } from "react-router-dom";
import { CustomizationScene } from "../CustomizationTray/CustomizationScene";

import dummyCatalog from "../../data/dummyCatalog.json";

import ProductCarrousel from "../UI/ProductCarrousel";
import ProductDetailTab from "../UI/ProductDetails";
import ProductTabs from "../UI/ProductTabs";
import classes from "./DetailPage.module.css";

const SneakerPage = () => {
  const params = useParams();
  const data = dummyCatalog.filter((product) => product.id.match(params.id));
  const props = data[0];

  const [activeTab, setActiveTab] = useState("details");

  const switchTabHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={classes["main-container"]}>
        <div className={classes["product-container"]}>
          {activeTab === "details" && (
            <ProductCarrousel images={props.img_url} />
          )}
          {activeTab === "customize" && <CustomizationScene />}
        </div>

        <div className={classes["details-container"]}>
          <ProductTabs switchTab={switchTabHandler} />
          <ProductDetailTab {...props} />
        </div>
      </div>
    </>
  );
};

export default SneakerPage;
