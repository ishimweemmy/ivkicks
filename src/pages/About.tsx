import React, { useEffect, useRef, useState } from "react";
import Description from "../components/About/Description";
import { descriptionsData } from "../data/descriptionsData";
import mcQueenWear from "../assets/mcQueenWear.jpeg";
import nikeShoesWear from "../assets/nikeShoes.jpg";
import yeezyShoesWear from "../assets/yeezyBoost.jpg";
import lock from "../assets/lock.png";
import personImage from "../assets/Ellipse 6.png";
import Trending from "../components/About/Trending";
import { FiGift } from "react-icons/fi";
import FounderMessage from "../components/About/FounderMessage";
import Quality from "../components/About/Quality";
import Dedication from "../components/About/Dedication";
import Accessories from "../components/Landing/Accessories";
import OurProducts from "../components/About/OurProducts";
import PopularBrands from "../components/About/PopularBrands";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-screen h-fit flex flex-wrap">
      <div className="h-fit w-full grid grid-cols-1 grid-rows-aboutTop place-items-center gap-5 mb-[2rem]">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-white text-3xl text-center font-bold px-[rem]">
            Best Sneakers delivered to you.
          </span>
        </div>
        <div
          className="w-[90%] h-full flex flex-col items-center justify-center rounded-md bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url(${mcQueenWear})`,
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div
            className="w-[15rem] h-fit px-3 py-2 flex items-center justify-center rounded-[.5rem] relative bottom-[-.5rem] bg-white gap-2 tracking-tight "
            style={{ boxShadow: "0px 20px 30px rgba(64, 103, 254, 0.15)" }}
          >
            <div className="w-[2rem] h-[2rem] bg-white grid place-items-center rounded-full shadow-slate-400 shadow-xl absolute right-5 top-[-1rem]">
              <img src={lock} alt="" width={12} />
            </div>
            <img src={personImage} alt="" className="w-8" />
            <span className="text-xs">
              <b>Joan</b> has just purchased these sneakers right now.
            </span>
          </div>
        </div>
        <div
          className="w-[90%] h-full flex flex-col items-center justify-end rounded-md bg-no-repeat bg-cover gap-4 overflow-hidden"
          style={{
            backgroundImage: `url(${nikeShoesWear})`,
            backgroundPosition: "center",
            cursor: "none",
          }}
        >
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10 transition cursor-6"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
            <Trending
              imgSrc={nikeShoesWear}
              name="Nike Air 780c"
              price={890}
              size={8}
              category="male"
            />
        </div>
        <div
          className="w-[90%] h-full flex flex-col items-center justify-end bg-[white] rounded-md bg-no-repeat bg-contain gap-2"
          style={{
            backgroundImage: `url(${yeezyShoesWear})`,
            backgroundPosition: "center",
          }}
        >
          <div className="h-[4rem] w-[95%] rounded-xl justify-between flex bg-white shadow-xl shadow-slate-400">
            <div className="w-8/12 flex items-center gap-2 pl-2">
              <div className="w-[3rem] h-[3rem] grid place-items-center bg-[#adbdff] rounded-full row-span-2">
                <FiGift className="text-xl text-white" />
              </div>
              <div className="w-fit h-full flex flex-col items-start justify-center">
                <span className="text-[#315bff] text-xl font-bold">10%</span>
                <span className="text-xs text-[rgb(10,8,58)] font-semibold whitespace-nowrap">
                  This week's discount
                </span>
              </div>
            </div>
            <div className="h-full w-3/12 grid place-items-center relative">
              <button className="w-[3rem] h-fit text-[#315bff] text-xs font-bold uppercase">share a gift</button>
              <div className="h-[1rem] w-[1rem] rounded-full bg-[#d4d4d4] absolute top-[-.5rem] left-[-.5rem]"></div>
              <div className="h-[1rem] w-[1rem] rounded-full bg-[#d4d4d4] absolute bottom-[-.5rem] left-[-.5rem]"></div>
            </div>
          </div>
          <div
            className="w-6 h-6 rounded-full grid place-items-center z-10"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem] mb-10">
        {descriptionsData.map((descriptionData) => {
          const { imgSrc, degree, description } = descriptionData;
          return (
            <Description
              imgSrc={imgSrc}
              degree={degree}
              description={description}
            />
          );
        })}
      </div>
      <FounderMessage />
      <Quality />
      <Dedication />
      <Accessories />
      <OurProducts />
      <PopularBrands />
    </div>
  );
};

export default About;
