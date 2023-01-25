import { AiOutlineHeart } from "react-icons/ai";
import type { FC } from "react";

interface CategoryProductProps {
  id: number;
  imgSrc: string;
  discount?: number;
  sneakersName: string;
  sneakersType: string;
  price: number;
}

const CategoryProduct: FC<CategoryProductProps> = (props) => {
  const { imgSrc, discount, sneakersName, sneakersType, price } = props;
  return (
    <div className="w-full h-[20rem] rounded-xl bg-[#f5f5f5] p-2 px-3 flex flex-col items-center justify-center ">
      <div
        className="w-full h-[70%] bg-cover bg-no-repeat rounded-lg flex items-start justify-between p-4"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {discount && (
          <span className="text-xs font-bold text-white uppercase bg-[#FF3C78] rounded-full px-2 py-1">
            {discount}% off
          </span>
        )}
        <AiOutlineHeart className="text-white text-2xl" />
      </div>
      <span className="text-base font-bold text-[rgb(10,8,58)] text-center">
        {sneakersName}
      </span>
      <span className="text-base font-bold text-gray-500 text-center">
        {sneakersType}
      </span>
      <span className="text-lg font-bold text-[rgb(10,8,58)] text-center">
        ${price}
      </span>
    </div>
  );
};

export default CategoryProduct;
