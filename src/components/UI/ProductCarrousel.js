import classes from "./ProductCarrousel.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ProductCarrousel = (props) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Swiper
          updateOnWindowResize
          className={classes.swiper}
          loop={true}
          spaceBetween={50}
          navigation={true}
          modules={[Navigation]}
          grabCursor={true}
        >
          <div>
            {props.images.map((image, index) => (
              <SwiperSlide
                key={image}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={image} alt="Product" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarrousel;
