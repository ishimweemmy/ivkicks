import type { FC } from "react";
import { color } from "../Landing/FeaturedPro";
import { Fade } from "react-reveal";

interface TasteProps {
  imgUrl: string;
  heading: string;
  content: string;
  id: number;
}

const Taste: FC<TasteProps> = (props) => {
  const { imgUrl, heading, content, id } = props;
  const colors: color[] = [
    { firstColor: "#FE7831", secondColor: "#FFDEBE" },
    { firstColor: "#FF3C78", secondColor: "#FFB2B2" },
    { firstColor: "#02BE83", secondColor: "#B3F6DC" },
  ];

  const styles = {
    background: `linear-gradient(270deg, ${colors[id - 1].firstColor} 0%, ${
      colors[id - 1].secondColor
    } 100%)`,
  };
  return (
    <Fade right delay={1000}>
      <div className="w-full h-full bg-white relative flex flex-col items-center justify-center gap-[1rem] p-[2rem] lsm:gap-1 transition duration-200 hover:scale-[1.2] md:hover:scale-[1.05] md:flex-row md:px-0 md:pl-8 md:gap-4 ">
        <div
          className="w-16 h-16 grid place-items-center p-4 bg-[#E6A271] rounded-full md:h-14 shadow-xl"
          style={{ ...styles }}
        >
          <img src={imgUrl} alt="" className="w-full h-full " />
        </div>
        <div className="flex flex-col w-full miniTablet:pr-[2rem] ">
          <span className="text-center text-lg font-bold lg:text-xl md:text-start ">
            {heading} Series
          </span>
          <p className="text-center text-sm md:text-start lg:text-base">
            {content}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Taste;
