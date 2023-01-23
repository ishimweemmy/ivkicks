import { FiChevronLeft } from "react-icons/fi";
import { Autoplay, Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Collection from "../components/Products/Collection";
import SlideNextButton from "../components/Global/SlideNextButton";
import { collections } from "../data";
import { useRef } from "react";

const Collections = () => {
  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="w-full h-fit py-16 flex flex-col items-center justify-center gap-4 bg-white">
      <div className="w-full h-full hidden pt-[1rem] md:flex justify-start items-center pl-[1rem] gap-4 bg-white lsm:px-8 xl:px-20 2xl:px-24">
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Home
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Collections
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500 2xl:text-lg">
          Running Sneakers
        </span>
      </div>
      <span className="w-full h-fit py-2 flex items-center justify-start gap-2 text-sm text-[rgb(10,8,58)] pl-4 font-bold">
        <FiChevronLeft />
        Running sneakers
      </span>
      <div className="w-full h-fit py-6 flex flex-col bg-[#f5f5f5] items-center justify-center gap-4">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-6">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
            Running Sneakers
          </span>
          <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider px-8 lsm:text-start">
            For parties, the sneakers are good depending on your favourite, you
            can find the one that fits you.
          </p>
          <button
            className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
            style={{
              boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
            }}
          >
            Shop now
          </button>
        </div>
        <div className={`collectionsSwiper w-full h-[20rem] px-[1rem]`}>
          <Swiper
            modules={[Controller, Autoplay, Pagination]}
            className="w-full h-full"
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination
          >
            {collections.map((data) => {
              const { id, imgSrc, categoryName, productsNbr } = data;
              return (
                <SwiperSlide key={id} className="h-full">
                  <Collection
                    id={id}
                    imgSrc={imgSrc}
                    categoryName={categoryName}
                    productsNbr={productsNbr}
                  />
                  <SlideNextButton swipingButtonRef={nextButtonRef} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-white py-8">
        <div className="w-full h-fit flex justify-between px-16">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
            Performance Sneakers
          </span>
          <span className="text-[rgb(10,8,58)] text-base "></span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
