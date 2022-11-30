import type { FC } from "react";
import Triangle, { TriangleProps } from "./Triangle";

export interface QualityCProps {
  imgSrc: string;
  heading: string;
  description: string;
  triangles: TriangleProps[];
  id: number
}

const QualityCard: FC<QualityCProps> = (props) => {
  const { imgSrc, heading, description, triangles, id } = props;
  const textColors: string[] = ["#315BFF", "#FE7831", "#02BE83"];
  console.log(id)

  return (
    <div className={`w-full h-fit py-[.5rem] flex flex-col items-center justify-center gap-[3rem] xLgMd:w-full ${id ==1 ?"lsm": "normal"} lsm:gap-0`}>
      <div className="w-full h-[50%] relative grid place-items-center">
        {/* <img src={imgSrc} alt="" className="w-[85%] h-[20rem] rounded-md" /> */}
        <div
          className="h-[12rem] w-[85%] minSm:h-[15rem] bg-cover rounded-md z-10 bg-no-repeat xLgMd:h-[16rem] lg:h-[20rem]"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
          }}
        ></div>
        {triangles.map((triangle) => {
          const { position, id, rotation } = triangle;
          return (
            <Triangle
              key={id}
              position={position}
              id={id}
              rotation={rotation}
            />
          );
        })}
      </div>
      <div className="h- w-full flex flex-col items-start justify-center px-[1.5rem] gap-[1.5rem] lsm:items-center">
        <span className={`text-2xl font-bold lsm:text-center`} style={{color: textColors[id]}}>{heading}</span>
        <p className="text-base tracking-wide text-gray-800 font-medium lsm:text-center" >{description}</p>
      </div>
    </div>
  );
};

export default QualityCard;
