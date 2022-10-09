import classes from "./ColorButton.module.css";

const ColorButton = ({ item, onClick, slideIndex }) => {
  // console.log("item: ", item.colors);
  return (
    <div className={classes.container}>
      <span className={classes.title}>
        {item.name}
        <span className={classes.slideNum}>
          {`\t${slideIndex.index + 1}/${slideIndex.length}`}
        </span>
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontWeight: "400",
          textAlign: "centeR",
        }}
      >
        {item.colors.map((color) => (
          <div
            key={`${item.name}${color.colorName}`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <button
              name={item.name}
              key={color.colorName}
              className={classes.circle2}
              onClick={onClick}
              value={color.url}
              style={{ backgroundColor: `${color.hex}` }}
            ></button>
            <span style={{ fontSize: "small" }}>{color.colorName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorButton;
