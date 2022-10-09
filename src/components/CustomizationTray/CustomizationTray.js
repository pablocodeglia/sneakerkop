import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ColorButton from "./ColorButton";
import gsap from "gsap";
import { useState } from "react";

const CustomizationTray = ({ cameraAngles, onClick, camera }) => {
  const [slideIndex, setSlideIndex] = useState({
    index: 0,
    length: cameraAngles.length,
  });

  const changeCamera = (alpha, beta, radius = 5, ease = "expo") => {
    gsap.to(camera.current, {
      duration: 1.5,
      alpha: alpha,
      beta: beta,
      radius: radius,
      ease: ease,
    });
  };

  return (
    <>
      <Swiper
        updateOnWindowResize
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        navigation={true}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          changeCamera(
            cameraAngles[swiper.realIndex].camAngles.alpha,
            cameraAngles[swiper.realIndex].camAngles.beta,
            cameraAngles[swiper.realIndex].camAngles.radius
          );
          setSlideIndex({ ...slideIndex, index: swiper.realIndex });
          //   console.log("Slide index changed to: ", swiper.realIndex);
        }}
      >
        {cameraAngles.map((item) => (
          <SwiperSlide key={item.name}>
            <ColorButton
              slideIndex={slideIndex}
              item={item}
              onClick={onClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomizationTray;
