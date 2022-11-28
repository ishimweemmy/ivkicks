import { SwiperSlide } from "swiper/react";
import type { FC } from "react";

export interface BrandProps {
  id: number;
  imgSrc: string;
}

const Brand: FC<BrandProps> = (props) => {
  const { id, imgSrc } = props;
  return (
    <div className="w-full h-full bg-white rounded-md border-2 border-dashed border-[#C1C0C0] grid place-items-center">
      <img src={imgSrc} alt="" className="w-[5rem]" />
    </div>
  );
};

export default Brand;
