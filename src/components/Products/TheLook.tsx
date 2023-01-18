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
        className="w-full h-[75%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${imgSrc}`,
          backgroundPosition: `center`,
        }}
      ></div>
      <div className="w-full h-[35%] grid grid-cols-2">
        <div className="w-[60%] h-fit flex flex-col gap-2">
          <span className="text-sm text-[#ff3c76d9] font-bold uppercase">{type}</span>
          <span className="text-sm text-[rgb(10,8,58)] font-bold">{name}</span>
        </div>

      </div>
    </div>
  );
};

export default TheLook;
