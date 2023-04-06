import { useSwiper } from "swiper/react";
import type { FC } from "react";
import { memo } from "react";

const SlidePrevButton: FC<PrevButtonProps> = (props) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      ref={props.swipingButtonRefPrev}
    ></button>
  );
};

export default memo(SlidePrevButton);
