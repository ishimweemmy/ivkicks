import Triangle1 from "../../../public/server-assets/triangle1.svg";
import Triangle2 from "../../../public/server-assets/triangle2.svg";
import uniqueShoe from "/server-assets/alexander.png";
import uniqueShoe1 from "/server-assets/alexander1.png";
import uniquesArrow from "/server-assets/uniques-arrow.svg";
import filledStar from "../../assets/Star 4.svg";
import { IoHeart } from "react-icons/io5";
import mcQueenWear from "../../assets/mcQueenWear.jpeg";
import nikeShoesWear from "../../assets/nikeShoes.jpg";
import yeezyShoesWear from "../../assets/yeezyBoost.jpg";
import { EditLocation } from "@mui/icons-material";
import { FiEdit3 } from "react-icons/fi";

const UniqueProducts = () => {
  const theRatingStars: JSX.Element[] = [...Array(Math.floor(5))].map(
    (el: undefined, index: number) => {
      return <img src={filledStar} alt="" key={index} className="w-2" />;
    }
  );
  return (
    <div className="w-full h-fit bg-[#f5f5f5] flex flex-col items-center justify-center">
      <div className="w-full h-fit flex flex-col gap-[1rem] p-[3rem] minSm:w-fit minSm:items-center">
        <span className="text-start text-xs text-[#FF3C78] uppercase font-bold block lg:text-base xlarge:text-lg">
          Features
        </span>
        <h1 className="text-2xl text-[#0A083A] font-bold text-start lg:text-4xl xlarge:text-5xl minSm:text-center whitespace-nowrap">
          Unique products
        </h1>
      </div>
      <div className="w-full h-fit relative flex flex-col items-center justify-center">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-24 ">
          {/* banner 1 */}

          <div className="w-full h-fit flex items-center relative">
            <img
              src={uniquesArrow}
              alt=""
              className="w-14 h-14 absolute left-8 top-10 rotate-[-45deg]"
            />
            <div className="w-full h-56 flex items-center justify-center relative">
              <img
                src={Triangle2}
                alt=""
                className="w-[65%] absolute rotate-[-20deg] left-8"
              />
              <img
                src={uniqueShoe}
                alt=""
                className="w-[55%] absolute rotate-[20deg] right-14 bottom-2"
              />
            </div>
            <img
              src={uniquesArrow}
              alt=""
              className="w-12 h-12 absolute right-8 top-12 rotate-[45deg]"
            />
          </div>

          {/* banner 2 */}

          <div className="w-full h-56 flex items-center justify-start  relative ">
            <img
              src={uniquesArrow}
              alt=""
              className="w-14 h-14 absolute left-8 bottom-6 rotate-[-130deg]"
            />
            <img
              src={Triangle1}
              alt=""
              className="w-[55%] absolute rotate-[15deg] right-16"
            />
            <img
              src={uniqueShoe1}
              alt=""
              className="w-[55%] absolute rotate-[20deg] right-20 bottom-6"
            />
            <img
              src={uniquesArrow}
              alt=""
              className="w-12 h-12 absolute right-8 bottom-6 rotate-[130deg]"
            />
          </div>
        </div>
        <div className="w-full h-fit flex-col items-center justify-center gap-2 absolute grid grid-cols-1 place-items-center md:grid-cols-2 ">
          {/* card 1 */}

          <div className="w-[9rem] h-[8rem] backdrop-blur-3xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl flex flex-col items-center justify-center p-3">
            <div className="w-full flex justify-between items-start mb-2">
              <span className="text-[.6rem] font-bold text-white bg-[#FF3C78] px-[.2rem] py-[.1rem] rounded-lg">
                -10%
              </span>
              <div className="w-[70%] relative flex items-center justify-center ">
                <div className="w-[3rem] h-[3rem] rounded-full grid place-items-center bg-[#b700ff] before:w-[80%] before:h-[80%] before:rounded-full before:bg-[#ee82ee6f] before:border before:border-white"></div>
                <img
                  src="/server-assets/image 1.png"
                  className="absolute rotate-[-20deg] scale-[1.1] right-[-.5rem]"
                  alt=""
                />
              </div>
              <IoHeart className="text-[#FF3C78]" />
            </div>
            <span className="text-xs text-[#0A083A] font-bold">
              Nike Air Max
            </span>
            <span className="text-xs text-[#426eff] font-bold">$320.00</span>
            <span className="flex gap-1">
              {theRatingStars} <b className="text-xs text-[#0A083A]">(5.0)</b>
            </span>
          </div>

          {/* card 2 */}
          <div className="w-[12rem] h-[14rem] backdrop-blur-3xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl flex flex-col items-start justify-center gap-2 pl-3">
            <span className="text-sm font-bold text-[#0A083A]">
              Manage items
            </span>
            <div className="flex items-center justify-start gap-4">
              {[
                { title: "orders", measurement: 3425 },
                { title: "returns", measurement: 34.25 },
              ].map(({ title, measurement }) => {
                return (
                  <div className="flex flex-col">
                    <span className="text-[.6rem] font-semibold text-[#0A083A] uppercase">
                      {title}
                    </span>
                    <span className="text-base font-bold text-[#0A083A]">
                      ${measurement}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="w-[80%] h-fit flex justify-center items-center gap-2 ml-3">
              <img
                src={nikeShoesWear}
                alt=""
                className="w-[30%] h-[2rem] rounded-md"
              />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[.6rem] font-bold text-[#FF3C78]">
                  Running nike shoes
                </span>
                <div className="flex items-center justify-center gap-2 md:gap-1 lg:gap-[1rem]">
                  <p className="flex items-center justify-center gap-1">
                    <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold lg:text-sm">
                      price:
                    </span>
                    <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal text-center lg:text-sm">
                      $456
                    </span>
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold">
                      QTY:
                    </span>
                    <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal">
                      2
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-fit h-fit p-1 border border-[#436cf3] rounded-full">
                <FiEdit3 className="text-xs text-[#436cf3]" />
              </div>
            </div>
            <div className="w-[80%] h-fit flex justify-center items-center gap-2 ml-3">
              <img
                src={yeezyShoesWear}
                alt=""
                className="w-[30%] h-[2rem] rounded-md"
              />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[.6rem] font-bold text-[#FF3C78]">
                  Running nike shoes
                </span>
                <div className="flex items-center justify-center gap-2 md:gap-1 lg:gap-[1rem]">
                  <p className="flex items-center justify-center gap-1">
                    <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold lg:text-sm">
                      price:
                    </span>
                    <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal text-center lg:text-sm">
                      $200
                    </span>
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <span className="text-[rgb(10,8,58)] text-[.6rem] font-semibold">
                      QTY:
                    </span>
                    <span className="text[rgb(10, 8, 58)] text-[.6rem] font-normal">
                      1
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-fit h-fit p-1 border border-[#436cf3] rounded-full">
                <FiEdit3 className="text-xs text-[#436cf3]" />
              </div>
            </div>
            <button
              className="w-[6rem] h-[1.5rem] px-2 rounded-[.3rem] bg-[#FF3C78] text-white text-[.6rem] text-center whitespace-nowrap self-center"
              style={{
                boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
              }}
            >
              Add new items
            </button>
          </div>

          {/* card 3 */}
          <div className="w-[11rem] h-[4rem] backdrop-blur-xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl flex items-center justify-center gap-2 px-2">
            <div className="w-[70%] relative flex items-center justify-center ">
              <div className="w-[2rem] h-[2rem] rounded-full grid place-items-center bg-[#b700ff] before:w-[80%] before:h-[80%] before:rounded-full before:bg-[#ee82ee6f] before:border before:border-white"></div>
              <img
                src="/server-assets/image 1.png"
                className="absolute right-[-.5rem] scale-[1.1]"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-[.6rem] whitespace-nowrap text-white">Air max Motion</span>
              <span className="text-xs text-[#426eff] font-bold">$320.00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm bg-white w-4 h-4 rounded-full text-center">+</span>
              <span className="text-sm text-center">1</span>
              <span className="text-sm bg-[#426eff] w-4 h-4 rounded-full text-center">-</span>
            </div>
          </div>

          {/* card 4 */}
          <div className="w-[11rem] h-[4rem] backdrop-blur-3xl rounded-md before:content-[''] before:absolute before:w-full before:h-full before:bg-[#fcd0af51] before:blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default UniqueProducts;
