import type { FC } from "react";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";

export interface PromoProductProps {
  sneakerName: string;
  madeOf: string;
  durabilityType: string;
  imgSrc: string;
  userImage: string;
  rating: number;
  userTestimonial: string;
}

const PromoProduct: FC<PromoProductProps> = (props) => {
  const {
    sneakerName,
    madeOf,
    durabilityType,
    imgSrc,
    userImage,
    userTestimonial,
    rating,
  } = props;

  const theRatingStars: JSX.Element[] = [...Array(Math.floor(rating))].map(
    (el: undefined, index: number) => {
      return <img src={filledStar} alt="" key={index} className="w-3" />;
    }
  );

  const theUnfilledStars: JSX.Element[] =
    rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
        (el: undefined, index: number) => {
          return (
            <img src={unFilledStar} alt="" key={index} className="w-3" />
          );
        }
      )
      : [];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-40 ">
      <div className="w-full h-[40%] bg-[#ff00007e] flex flex-col items-center justify-start gap-0 lsm:grid lsm:place-items-center">
        <span className="text-sm text-white font-bold  lsm:col-span-2 lsm:text-xl">{sneakerName}</span>
        <span className="text-xs text-white flex items-center gap-2 lsm:text-base font-medium">
          <StackedLineChartIcon className="p-1 text-[#fa9358] lsm:p-0" fontSize="medium" />
          {madeOf}
        </span>
        <span className="text-xs text-white flex items-center gap-2 lsm:text-base font-medium">
          <AutoModeIcon className="p-1 text-[#fa9358] lsm:p-0" fontSize="medium" />
          {durabilityType} materials
        </span>
      </div>
      <div className="w-full h-[60%] bg-[#171766d1] flex flex-col items-center justify-center gap-[2rem]">
        <div className="w-full relative">
          <img src={imgSrc} alt="" />
          <div className="w- h- flex flex-col items-center justify-center">
            <span>{theRatingStars}{}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoProduct;
