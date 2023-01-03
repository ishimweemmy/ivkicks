import { useSwiper } from "swiper/react";
import type { FC } from "react";

interface ButtonProps {
  swipingButtonRef: any;
}

const SlideNextButton: FC<ButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="hidden"
      onClick={() => swiper.slideNext()}
      ref={props.swipingButtonRef}
      onAnimationIteration={() => console}
    ></button>
  );
};

export default SlideNextButton;
