import { useSwiper } from "swiper/react";
import type { FC } from "react";
import { memo } from "react";

const SlideNextButton: FC<NextButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="hidden"
      onClick={() => swiper.slideNext()}
      ref={props.swipingButtonRef}
    ></button>
  );
};

export default memo(SlideNextButton);
