import shoe1 from "../../assets/image 1.png";
import addToCartIcon from "../../assets/Group.svg";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";
import type { FC } from "react";

export interface FeaturedProInterface {
  rating: number;
  description: string;
  price: Number;
  imgSource: string;
  id: string;
  indexId: number;
  from?: string;
}

export interface color {
  firstColor: string;
  secondColor: string;
}

const FeaturedPro: FC<FeaturedProInterface> = (props) => {
  const { rating, description, price, imgSource, id, indexId, from } = props;
  const colors: color[] = [
    { firstColor: "#FE7831", secondColor: "#FFDEBE" },
    { firstColor: "#02BE83", secondColor: "#B3F6DC" },
    { firstColor: "#FF3C78", secondColor: "#FFB2B2" },
    { firstColor: "#8AA8F8", secondColor: "#315BFF" },
  ];

  const styles = {
    background: `linear-gradient(270deg, ${colors[indexId].firstColor} 0%, ${colors[indexId].secondColor} 100%)`,
  };

  const theRatingStars: JSX.Element[] = [...Array(Math.floor(rating))].map(
    (el: undefined, index: number) => {
      return <img src={filledStar} alt="" key={index} />;
    }
  );

  const theUnfilledStars: JSX.Element[] =
    rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
          (el: undefined, index: number) => {
            return <img src={unFilledStar} alt="" key={index} />;
          }
        )
      : [];

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-[1rem] sm:gap-[1rem]`}
    >
      <div className="w-full h-auto relative flex items-center justify-center">
        <div
          className="w-[7rem] h-[7rem] rounded-full absolute top-[-1rem] right-[9rem] sm:right-[30%] lsm:right-[40%] lssm:right-[40%]"
          style={styles}
        ></div>
        <img src={imgSource} alt="" className="h-[10rem] z-0" />
        <div
          className="w-[2rem] h-[2rem] rounded-full grid place-items-center absolute bottom-10 cursor-pointer z-10 "
          style={{
            background:
              "linear-gradient(97.49deg, rgba(138, 168, 248, 0.6) -0.43%, rgba(49, 91, 255, 0.6) 144.53%)",
          }}
        >
          <img src={addToCartIcon} alt="" />
        </div>
      </div>
      <div className="flex gap-2">
        {theRatingStars} {theUnfilledStars}
      </div>
      <span className="w-[14rem] text-center">{description}</span>
      <span className="font-bold">{`$ ${price}`}</span>
    </div>
  );
};

export default FeaturedPro;
