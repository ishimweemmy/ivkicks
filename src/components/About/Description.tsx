import React from "react";
import type { FC } from "react";

interface DescriptionProps {
  imgSrc: string;
  description: string;
  degree: number;
}

const Description: FC<DescriptionProps> = (props) => {
  const { imgSrc, description, degree } = props;
  return (
    <div className="w-fit h-fit flex flex-col gap-2 items-center justify-center">
      <div className="w-[5rem] h-[5rem] rounded-full bg-[#ffffff16] grid place-items-end">
        <img src={`/server-assets/${imgSrc}`} className="w-14" alt="" />
      </div>
      <span className="text-4xl text-[#02BE83] font-bold">{degree}</span>
      <span className="text-center font-medium text-xl text-white">{description}</span>
    </div>
  );
};

export default Description;
