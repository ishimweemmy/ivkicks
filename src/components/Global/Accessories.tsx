import type { FC } from "react";
import football from "../../assets/football 1.png";
import fback from "../../assets/fback.png";
import volleyShirt from "../../assets/volley 1.png";
import { Fade, Zoom, Bounce, Rotate, Flip } from "react-reveal";

const Accessories: FC = () => {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row md:h-fit xl:h-[55vh]">
      <Flip left>
        <div className="w-full h-full bg-[#02BE83] z-10 flex flex-col items-center justify-start relative gap-[2rem] md:flex-row md:h-[25rem] md:gap-0 xl:h-full">
          <div
            className="absolute w-10 h-10 rounded-full right-4 top-[12rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full left-[-2rem] top-[2rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          ></div>
          <div className="w-2/3 h-1/2 relative flex items-center justify-center md:w-1/2 md:h-full">
            <img
              src={football}
              alt=""
              className="absolute z-10 xl:scale-[1.2]"
            />
            <img
              src={fback}
              alt=""
              className="absolute right-[8%] bottom-[3%] w-[60%] md:bottom-[25%] xLgMd:right-[15%]"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4 justify-center items-center md:items-start md:gap-[2rem]">
            <span className="text-[#0A083A]">Accessories</span>
            <h1 className="text-white text-4xl font-bold md:text-start">
              Football
            </h1>
            <p className="text-white text-center px-0 md:text-start md:px-0 md:z-10">
              We receive new sportwear every day. Just take your pick.
            </p>
            <button
              className="px-10 py-3 bg-[#0A083A] text-white text-sm rounded-md shadow-xl tracking-wider font-medium"
              style={{ boxShadow: "rgba(10, 8, 58, 0.3)" }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </Flip>
      <Flip right>
        <div className="w-full h-fit bg-[#0A083A] flex flex-col items-center justify-start relative md:flex-row md:h-[25rem] md:gap-0 xl:h-full">
          <div
            className="absolute w-10 h-10 rounded-full right-4 top-[12rem]"
            style={{
              background:
                "linear-gradient(97.49deg, rgba(138, 168, 248, 0.7) -0.43%, rgba(49, 91, 255, 0.7) 144.53%)",
            }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full left-[-2rem] top-[2rem]"
            style={{
              background:
                "linear-gradient(97.49deg, rgba(138, 168, 248, 0.7) -0.43%, rgba(49, 91, 255, 0.7) 144.53%)",
            }}
          ></div>
          <div className="w-2/3 h-1/2 relative flex items-center justify-center md:w-1/2 xLgMd:w-1/2 md:h-full xLgMd:h-full">
            <img
              src={volleyShirt}
              alt=""
              className="w-[14rem] absolute z-10 lg:scale-[1.2] xl:scale-[1.3] 2xl:scale-[1.5]"
            />
            <img
              src={fback}
              alt=""
              className="absolute right-[15%] bottom-[-2%] w-[50%] md:bottom-[15%] xLgMd:bottom-[10%] xLgMd:right-[20%]"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4 justify-center items-center md:items-start md:gap-[2rem]">
            <span className="text-[#02BE83]">Accessories</span>
            <h1 className="text-white text-4xl font-bold md:text-start sm:whitespace-nowrap">
              Volley ball
            </h1>
            <p className="text-white text-center px-16 xLgMd:text-start md:text-start md:px-0 sm:px-0">
              We receive new sportwear every day. Just take your pick.
            </p>
            <div className="flex flex-col items-center justify-center relative after:w-[8rem] after:h-[2rem] after:bg-[#02be82c7] after:blur-[24px] after:absolute after:bottom-[-.5rem]">
              <button className="px-10 py-3 bg-[#02BE83] text-white text-sm rounded-md tracking-wider font-medium z-10">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Flip>
    </div>
  );
};

export default Accessories;
