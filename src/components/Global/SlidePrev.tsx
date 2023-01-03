import { useSwiper } from "swiper/react";
import type { FC } from "react";

interface ButtonProps {
  swipingButtonRefPrev: any;
}

const SlidePrevButton: FC<ButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      ref={props.swipingButtonRefPrev}
    ></button>
  );
};

export default SlidePrevButton;
