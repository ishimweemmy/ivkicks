import Triangle1 from "../../../public/server-assets/triangle1.svg";

const UniqueProducts = () => {
  return (
    <div className="w-full h-fit bg-[#f5f5f5] flex flex-col items-center justify-center gap-8">
      <div className="w-full h-fit flex flex-col gap-[1rem] p-[3rem] minSm:w-fit minSm:items-center">
        <span className="text-start text-xs text-[#FF3C78] uppercase font-bold block lg:text-base xlarge:text-lg">
          Features
        </span>
        <h1 className="text-2xl text-[#0A083A] font-bold text-start lg:text-4xl xlarge:text-5xl minSm:text-center whitespace-nowrap ">
          Unique products
        </h1>
      </div>
      <div className="w-full h-fit-relative flex items-center justify-center">
        <div className="w-full h-fit flex flex-col items-center justify-between gap-8">
          {/* banner 1 */}

          <div className=""></div>

          {/* banner 2 */}
        </div>
        <div className="w-full h-fit flex-col items-center justify-center gap-8">
          {/* card 1 */}

          {/* card 2 */}

          {/* card 3 */}

          {/* card 4 */}
        </div>
      </div>
    </div>
  );
};

export default UniqueProducts;
