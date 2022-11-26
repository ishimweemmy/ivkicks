import React from "react";
import Brand, { BrandProps } from "../Landing/Brand";

const PopularBrands = () => {
  const brands: BrandProps[] = [
    { id: 0, imgSrc: "/server-assets/nike.png" },
    { id: 1, imgSrc: "/server-assets/newBalance.png" },
    { id: 2, imgSrc: "/server-assets/adidas.png" },
    { id: 3, imgSrc: "/server-assets/horse.png" },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center py-[3rem] gap-[2rem]">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-center text-[#02BE83] text-sm font-semibold uppercase">
          popular brands
        </span>
        <p className="text-center text-2xl font-black text-white px-8">
          We sell amazing products from brands that love us
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-6 px-[.75rem]">
          <p className="text-sm text-white text-center tracking-wider">
            For atheletes, high altitude produces two contradictory effects on
            performance.
          </p>
          <p className="text-sm text-white text-center tracking-wider">
            For explosive events (sprints up to 400 metres, long jump, tripple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem]">
        {brands.map((brand) => {
          const { id, imgSrc } = brand;

          return (
            <div className="w-[60%] h-[10rem] md:h-[10rem]" key={id}>
              <Brand id={id} imgSrc={imgSrc} />
            </div>
          );
        })}
      </div>
      <div className="w-[4rem] h-[4rem] rounded-full self-end mr-[2rem]" style={{background: "linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)"}}></div>
    </div>
  );
};

export default PopularBrands;