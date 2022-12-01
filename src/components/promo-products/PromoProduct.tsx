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
    <div className="w-full h-fit flex flex-col items-center justify-center relative z-40">
      <div className="flex flex-col items-center justify-center">
        <span className="text-md text-white font-bold">{sneakerName}</span>
        <span className="text-xs text-white flex items-center gap-2">
          <StackedLineChartIcon className="p-1 text-[#fa9358]" fontSize="medium" />
          {madeOf}
        </span>
        <span className="text-xs text-white flex items-center gap-2">
          <AutoModeIcon className="p-1 text-[#fa9358]" fontSize="medium" />
          {durabilityType} materials
        </span>
      </div>
      <img
        src={imgSrc}
        alt=""
        className="relative max-w-none w-[20rem] top-[-1rem] right-[-1rem]"
      />
      <div className="w-[20rem] h-fit flex items-center justify-center gap-[2rem] absolute bottom-[2rem] z-40">
        <div className="w-[12rem] h-[4rem] border py-2 bottom-0 rounded-2xl filter  flex flex-col items-center justify-center gap-2 backdrop-blur-lg">
          <div className="h-fit w-fit flex items-center gap-2">
            {theRatingStars}
            {theUnfilledStars}
          </div>
          <span className="text-white text-xs font-medium">
            {userTestimonial}
          </span>
        </div>
        <img
          src={userImage}
          alt=""
          className="w-12 h-12 rounded-full absolute right-12 -top-3 border"
          style={{ borderRadius: `52% 48% 48% 52% / 45% 45% 55% 55% ` }}
        />
      </div>
    </div>
  );
};

export default PromoProduct;
