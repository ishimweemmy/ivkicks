import { catalogueData } from "../../data";
import Category from "./Category";

const Catalogue = () => {
  return (
    <div className="w-full h-fit py-[4rem] bg-white flex flex-col items-center justify-center">
      <div className="w-full h-fit flex flex-col items-start justify-center gap-4 pl-6 miniSm:pl-8 xMiniTablet:pl-12 md:items-center">
        <span className="text-start text-[#FF3C78] text-sm uppercase font-bold md:text-center md:text-base">
          Catalogue
        </span>
        <span className="text-start text-[#0A083A] text-3xl font-bold xMiniTablet:text-4xl md:text-center">
          shop products by category
        </span>
        <span className="text-start text-xs text-gray-600 font-semibold pr-14  lssm:text-sm md:text-center md:pr-0">
          We constantly update our products to stay tooned for new stuff.
        </span>
      </div>

      <div className="w-[85%] h-fit py-4 grid place-items-center gap-3 grid-rows-catalogue xlssm:grid-rows-catalogueXlsm md:grid-cols-3 md:grid-rows-catalogueMd">
        {catalogueData.map((data) => {
          const { url, img, name, id } = data;
          return <Category key={id} url={url} img={img} name={name} id={id} />;
        })}
      </div>
    </div>
  );
};

export default Catalogue;
