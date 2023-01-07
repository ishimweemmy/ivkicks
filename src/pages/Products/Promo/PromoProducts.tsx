import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoFootsteps } from "react-icons/io5";
import { Swiper as SwiperEl, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import SlideNextButton from "../../../components/Global/SlideNextButton";
import SlidePrevButton from "../../../components/Global/SlidePrev";
import PromoProduct from "../../../components/promo-products/PromoProduct";
import Circle from "../../../components/promo-products/Circle";
import { promoProducts } from "../../../data";
import WorkOut from "../../../components/promo-products/charts/WorkOut";
import Steps from "../../../components/promo-products/charts/Steps";
import TrackerCard from "../../../components/promo-products/TrackerCard";
import Difference from "../../../components/promo-products/Difference";
import UniqueProducts from "../../../components/promo-products/UniqueProducts";

const Promo = () => {
  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full h-fit relative">
      <div className="w-full h-full bg-[#0A083A] py-[1rem] flex flex-col gap-[1rem] items-center justify-center minSm:gap-[4rem] lsm:grid lsm:grid-cols-1 miniTablet:grid-cols-2 grid-rows-promoTopLsm lsm:gap-y-[8rem] lgMd:gap-y-[12rem] md:grid-rows-promoTopMd 2xl:pl-[1rem] ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem] miniTablet:items-start lsm:pl-[1rem] md:pl-[2rem] xl:pl-[5rem]">
          <span className="text-3xl text-center text-[#FF3C78] font-black lsm:text-start lsm:text-4xl mini2xl:text-6xl">
            Built for speed.
          </span>
          <p className="text-white text-sm text-center leading-5 tracking-wide px-9 lsm:px-0 lsm:text-lg miniTablet:text-sm miniTablet:text-start mini2xl:text-lg">
            Bust these puppies out for speed work or race day, and opt for a
            more cushioned running shoe during other training cycles
          </p>
          <button
            className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem] mini2xl:min-h-[3.5rem] mini2xl:max-h-[3.5rem] mini2xl:text-base mini2xl:rounded-lg"
            style={{
              boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
            }}
          >
            Shop now
          </button>
        </div>
        <div className="w-full h-full relative hidden miniTablet:grid grid-cols-promoBadges gap-[1rem] lgMd:pr-[2rem]">
          <div className="grid place-items-end">
            <div className="w-[85%] h-[60%] rounded-lg grid place-items-center bg-[#e9e9fb] md:h-[50%] md:w-[9rem] ">
              <div className="w-[85%] h-[85%] rounded-lg bg-white flex flex-col items-center justify-center gap-[rem]">
                <IoFootsteps className="text-4xl text-[blue]" />
                <span className="text-xl font-bold text-[#0A083A]">2500</span>
                <span className="text-base text-[#0A083A]">steps</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative pt-8 md:pt-[5rem] lgMd:pt-[4rem] lg:pr-[1rem] xlarge:pr-[25%] 2xl:pr-[40%] ">
            <div className="w-full h-[6rem] bg-[#e9e9fb] rounded-lg grid place-items-center lgMd:h-[7rem]">
              <div className="w-[90%] h-[85%] rounded-lg bg-white grid grid-cols-[40%_60%] md:grid-cols-promoBadge1 place-items-center">
                <WorkOut />
                <div className="h-full w-full flex items-center justify-center gap-[.5rem]">
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    Daily Work out
                  </span>
                  <span className="text-xs text-green-500 font-bold whitespace-nowrap hidden md:block">
                    +30%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[80%] h-[13rem] bg-[#e9e9fb] grid place-items-center absolute bottom-[-9rem] rounded-lg self-end xLgMd:w-[12rem] md:bottom-[-6rem] lgMd:bottom-[-8rem] lgMd:h-[15rem]">
              <div className="w-[85%] h-[85%] rounded-lg bg-white flex flex-col items-center justify-center lgMd:h-[100%]">
                <span className="text-xl font-bold text-">Steps Tracker</span>
                <span className="text-xs text-gray-500 ">Today</span>
                <Steps />
                <div className="flex justify-between items-center gap-[2rem] mb-[1rem]">
                  {[
                    {
                      id: 0,
                      measurement: "300Kcal",
                      imgSrc: "/server-assets/calories.png",
                    },
                    {
                      id: 1,
                      measurement: "20km",
                      imgSrc: "/server-assets/distance.png",
                    },
                  ].map((trackerData) => {
                    const { id, measurement, imgSrc } = trackerData;
                    return (
                      <TrackerCard
                        id={id}
                        measurement={measurement}
                        imgSrc={imgSrc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lsm:justify-start lsm:col-span-2">
          <Circle />
          <div className="w-full h-[22rem] bg-[#0000ff22 absolute top-[20rem] flex items-center justify-center lsm:h-[30rem] minSm:top-[20rem] lsm:top-[26rem] md:top-[35rem] lgMd:top-[rem]">
            <SwiperEl
              modules={[Controller, Autoplay]}
              slidesPerView={1}
              className="w-full h-full"
              spaceBetween={2}
              autoplay={true}
              loop={true}
            >
              {promoProducts.map((promoProduct) => {
                const {
                  sneakerName,
                  madeOf,
                  durabilityType,
                  userImage,
                  userTestimonial,
                  rating,
                  imgSrc,
                  id,
                } = promoProduct;

                return (
                  <SwiperSlide
                    className="w-fit h-full z-40 flex justify-center "
                    key={sneakerName}
                  >
                    <PromoProduct
                      key={id}
                      id={id}
                      sneakerName={sneakerName}
                      madeOf={madeOf}
                      durabilityType={durabilityType}
                      imgSrc={imgSrc}
                      userImage={userImage}
                      userTestimonial={userTestimonial}
                      rating={rating}
                    />
                  </SwiperSlide>
                );
              })}
              {/* fa9358 */}
              {/* <div className="spinBlur1 w-[20rem] h-[16rem] absolute bg-[#FF3C78] rounded-full bottom-[4rem] left-[26rem] -z-10 filter blur-3xl"></div> */}

              <SlideNextButton swipingButtonRef={swipingButtonRef} />
              <SlidePrevButton swipingButtonRefPrev={swipingButtonRefPrev} />
            </SwiperEl>
          </div>
          <div className="w-[90%] h-fit flex justify-between mt-[6rem] px-2 lsm:w-full lsm:mt-[10rem] md:mt-[12rem] lg:px-[4rem] mini2xl:w-[80%] z-50 ">
            <FiArrowLeft
              className="text-white lsm:text-xl"
              onClick={() => swipingButtonRefPrev.current?.click()}
            />
            <FiArrowRight
              className="text-white lsm:text-xl"
              onClick={() => swipingButtonRef.current?.click()}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] bg-[#0A083A] lsm:hidden"></div>
      <Difference />
      <UniqueProducts />
    </div>
  );
};

export default Promo;
