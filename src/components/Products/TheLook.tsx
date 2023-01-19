import type { FC } from "react";

interface TheLookProps {
  name: string;
  imgSrc: string;
  type: string;
  price: number;
  id: number;
}

const TheLook: FC<TheLookProps> = (props) => {
  const { name, imgSrc, type, price, id } = props;
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      {/* <img src={imgSrc} alt="" className="w-full h-[80%]" /> */}
      <div
        className="w-full h-[80%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${imgSrc}`,
          backgroundPosition: `center`,
        }}
      ></div>
      <div className="w-full h-[20%] grid grid-cols-[60%_40%] place-items-center">
        <div className="w-full h-fit flex flex-col">
          <span className="text-base text-[#ff3c76d9] font-bold uppercase">
            {type}
          </span>
          <span className="text-base text-[rgb(10,8,58)] font-medium">{name}</span>
        </div>
        <span className="text-2xl font-bold text-[rgb(10,8,58)]">${price}</span>
      </div>
    </div>
  );
};

export default TheLook;