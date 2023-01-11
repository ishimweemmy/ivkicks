import { ImQuotesLeft } from "react-icons/im";
import type { FC } from "react";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";

interface CustomerTestProps {
  customerName: string;
  rating: number;
  testimonial: string;
}

const Testimonial: FC<CustomerTestProps> = (props) => {
  const { customerName, rating, testimonial } = props;
  const theFilledStars: JSX.Element[] = [...Array(Math.floor(rating))].map(
    (el: undefined, index: number) => {
      return <img src={filledStar} alt="" key={index} className="w-4" />;
    }
  );

  const theUnfilledStars: JSX.Element[] =
    rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
          (el: undefined, index: number) => {
            return (
              <img src={unFilledStar} alt="" key={index} className="w-4" />
            );
          }
        )
      : [];
  return (
    <div className="w-full h-full border border-[#444082] relative flex flex-col items-center justify-center gap-2 p-3">
      <ImQuotesLeft className="w-16 h-16 text-[#c4c3c362] absolute -top-1 " />
      <span className="flex gap-1">
        {theFilledStars}
        {theUnfilledStars}
      </span>
      <p className="text-white text-sm text-center font-bold">{testimonial}</p>
      <span className="text-[#2e1fff] text-sm">{customerName}</span>
    </div>
  );
};

export default Testimonial;
