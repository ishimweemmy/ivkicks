import Brand, { BrandProps } from "../Landing/Brand";

const PopularBrands = () => {
  const brands: BrandProps[] = [
    { id: 0, imgSrc: "/server-assets/nike.png" },
    { id: 1, imgSrc: "/server-assets/newBalance.png" },
    { id: 2, imgSrc: "/server-assets/adidas.png" },
    { id: 3, imgSrc: "/server-assets/horse.png" },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center py-[3rem] gap-[2rem] lsm:flex-row lsm:gap-[2rem] lsm:pr-[2rem] lsm:relative lg:px-[5rem] ">
      <div className="flex flex-col items-center justify-center gap-8 lsm:items-start xLgMd:w-[30rem] xl:w-[35rem]">
        <span className="text-center text-[#02BE83] text-sm font-semibold uppercase lsm:pl-[2rem]">
          popular brands
        </span>
        <p className="text-center text-2xl font-black text-white px-8 lsm:text-start">
          We sell amazing products from brands that love us
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-6 px-[.75rem] lsm:pl-[2rem]">
          <p className="text-sm text-white text-center tracking-wider lsm:text-start">
            For atheletes, high altitude produces two contradictory effects on
            performance.
          </p>
          <p className="text-sm text-white text-center tracking-wider lsm:text-start">
            For explosive events (sprints up to 400 metres, long jump, tripple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-[1rem] lsm:grid lsm:grid-cols-2 xLgMd:gap-y-4  xLgMd:w-[25rem]">
        {brands.map((brand) => {
          const { id, imgSrc } = brand;

          return (
            <div className="w-[60%] h-[10rem] lsm:w-full xLgMd:w-[10rem] lsm:h-[8rem]" key={id}>
              <Brand id={id} imgSrc={imgSrc} />
            </div>
          );
        })}
      </div>
      <div className="w-[4rem] h-[4rem] rounded-full self-end mr-[2rem] lsm:absolute lsm:right-[-2rem] lsm:w-[3rem] lsm:h-[3rem] lsm:bottom-0" style={{background: "linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)"}}></div>
    </div>
  );
};

export default PopularBrands;