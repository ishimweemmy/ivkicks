import { SwiperSlide } from "swiper/react";
import type { FC } from "react";

export interface BrandProps {
  id: number;
  imgSrc: string;
  from?: string
}

const Brand: FC<BrandProps> = (props) => {
  const { id, imgSrc, from } = props;
  return (
    <div className="w-full h-full bg-white rounded-md border-2 border-dashed border-[#C1C0C0] grid place-items-center">
      <img src={imgSrc} alt="" className={`w-[5rem] lsm:w-${from == "pop-about" ? '[3rem]' : '[5rem]'} xLgMd:w-[4rem]`} />
    </div>
  );
};

export default Brand;
