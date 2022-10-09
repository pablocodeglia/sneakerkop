import classes from "./Catalog.module.css";
import dummyCatalog from "../../data/dummyCatalog.json";
import ProductCard from "../UI/ProductCard";

const CatalogPage = () => {
  return (
    <div className={classes["main-container"]}>
      <h1>Catalog</h1>
      <div className={classes["catalog-container"]}>
        {dummyCatalog.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
