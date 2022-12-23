import { FC } from "react";
import Switch from "./Switch";
import bestSellerPic from "../../assets/image6.png";
import filledStar from "../../assets/Star 4.svg";

interface BestSeller {
  rating: number;
  improvement: string;
  description: string;
  price: number;
}

const BestSeller: FC<BestSeller> = (props) => {
  const { rating, improvement, description, price } = props;

  const ratings = [...Array(Math.floor(rating))].map(
    (rate: undefined, index: number) => {
      return <img src={filledStar} className="w-5 lsm:w-4" alt="" key={index} />;
    }
  );

  return (
    <div className="w-full h-fit bg-white py-[4rem] flex flex-col gap-12 ">
      <div className="w-full flex flex-wrap items-center justify-center md:justify-around xMiniTablet:px-[2rem] lssm:justify-between lssm:px-[1rem] gap-4 h-fit xLgMd:flex-row">
        <h1 className="tracking-wide text-2xl text-[#0A083A] font-bold text-center md:text-4xl lg:text-5xl">
          Best seller this week
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <span className="text-lg font-medium text-[#0A083A]">Men</span>
          <Switch />
          <span className="text-lg font-medium text-[#0A083A]">women</span>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-16 lsm:flex-row lgMd:gap-0">
        <div className="w-full h-[12rem] relative flex items-center ">
          <div
            className="w-[60%] h-[12rem] lsm:h-full  rounded-r-2xl flex items-center"
            style={{
              background: "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
            }}
          >
            <img
              src="/server-assets/alexander1.png"
              alt=""
              className="max-w-none w-[20rem] minSm:w-[28rem] lsm:w-[30rem] absolute bottom-[-5rem] minSm:bottom-[-8rem] lsm:bottom-[-1rem] lgMd:w-[35rem] lgMd:bottom-[-5rem] lgMd:left-[-4rem]"
            />
          </div>
        </div>
        <div className="w-full h-[13rem] flex flex-col items-center lsm:items-start justify-center gap-[1rem] lgMd:w-[80%]">
          <div className="w-full h-fit flex items-center justify-center lsm:justify-start gap-[.2rem]">
            {ratings}
          </div>
          <span className="w-full text-center font-bold text-xl sm:px-4 minSm:px-[5rem] lsm:px-0 lsm:text-start md:pr-16 lg:pr-[18rem] xl:pr-[20rem]">{description}</span>
          <span className="w-full text-center font-bold text-xl lsm:text-start">${price}</span>
          <div className="flex flex-col items-center justify-center relative after:w-[8rem] after:h-[2rem] after:bg-[#315affbf] after:blur-[24px] after:absolute after:bottom-[-.5rem] ">
            <button className="px-10 py-3 bg-[#315BFF] text-white text-sm rounded-md tracking-wider font-medium z-10 2xl:px-20">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
