import { useSwiper } from "swiper/react";
import type { FC } from "react";

interface ButtonProps {
  swipingButtonRef: any;
}

const SlideNextButton: FC<ButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} ref={props.swipingButtonRef}>
      Slide to the next slide
    </button>
  );
};

export default SlideNextButton;
