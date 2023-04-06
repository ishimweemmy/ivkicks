import type { FC } from "react";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";
import { colors } from "../../data";
import { memo } from "react";

const NewArrival: FC<FeaturedProInterface> = (props) => {
  const { rating, description, price, imgSource, id, indexId } = props;

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
    <div className="w-[20rem] h-[30rem] flex flex-col items-center justify-between">
      <div
        className="w-[76%] h-[65%] flex  flex-col items-start justify-between p-4 rounded-2xl relative"
        style={styles}
      >
        <span className="text-3xl text-white font-extrabold">0{id}</span>
        <img
          src={imgSource}
          alt=""
          className="absolute top-[-.5rem] right-[-5.5rem] max-w-none"
        />
        <span className="px-6 py-1 bg-white rounded-full self-end">+</span>
      </div>
      <div className="w-[85%] h-36 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          {theRatingStars} {theUnfilledStars}
        </div>
        <span className="w-[14rem] text-center">{description}</span>
        <span className="font-bold text-xl">{`$ ${price}`}</span>
      </div>
    </div>
  );
};

export default memo(NewArrival);
