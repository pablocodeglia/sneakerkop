const PriceTag = ({ price, isOnSale, salePrice }) => {
  salePrice = salePrice.toFixed(2);

  return (
    <>
      <div>
        <span
          style={
            isOnSale
              ? {
                  color: "gray",
                  textDecoration: "line-through",
                  fontWeight: "200",
                }
              : { color: "black" }
          }
        >
          ${price.toFixed(2)}
        </span>
        <span style={{ color: "red" }}> {isOnSale ? "$" + salePrice : ""}</span>
      </div>
    </>
  );
};

export default PriceTag;
