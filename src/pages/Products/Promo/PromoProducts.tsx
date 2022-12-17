import { useRef, useState } from "react";
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

const Promo = () => {
  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full h-fit">
      <div className="w-full h-full bg-[#0A083A] py-[1rem] flex flex-col gap-[1rem] items-center justify-center minSm:gap-[4rem] lsm:grid lsm:grid-cols-1 miniTablet:grid-cols-2 grid-rows-promoTopLsm lsm:gap-y-[8rem] md:grid-rows-promoTopMd">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem] miniTablet:items-start lsm:pl-[1rem] md:pl-[2rem] xl:pl-[5rem]">
          <span className="text-3xl text-center text-[#FF3C78] font-black lsm:text-start lsm:text-4xl">
            Built for speed.
          </span>
          <p className="text-white text-sm text-center leading-5 tracking-wide px-9 lsm:px-0 lsm:text-lg miniTablet:text-sm miniTablet:text-start">
            Bust these puppies out for speed work or race day, and opt for a
            more cushioned running shoe during other training cycles
          </p>
          <button
            className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
            style={{ boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px" }}
          >
            Shop now
          </button>
        </div>
        <div className="w-full h-full relative hidden miniTablet:grid grid-cols-promoBadges gap-[1rem] bg-[">
          <div className="grid place-items-end">
            <div className="w-[85%] h-[60%] rounded-lg grid place-items-center bg-[#e9e9fb]">
              <div className="w-[85%] h-[85%] rounded-lg bg-white flex flex-col items-center justify-center gap-[rem]">
                <IoFootsteps className="text-4xl text-[blue]" />
                <span className="text-xl font-bold text-[#0A083A]">2500</span>
                <span className="text-base text-[#0A083A]">steps</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative pt-8 ">
            <div className="w-full h-[6rem] bg-[#e9e9fb] rounded-lg grid place-items-center">
              <div className="w-[90%] h-[85%] rounded-lg bg-white">
                <WorkOut />
              </div>
            </div>
            <div className="w-[80%] h-[12rem] bg-[#e9e9fb] grid place-items-center absolute bottom-[-7rem] rounded-lg self-end">
              <div className="w-[85%] h-[85%] rounded-lg bg-white"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lsm:justify-start lsm:col-span-2">
          <Circle />
          <div className="w-full h-[22rem] bg-[#0000ff22 absolute top-[25rem] flex items-center justify-center lsm:h-[30rem] minSm:top-[26rem] lsm:top-[30rem] md:top-[35rem]">
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
                    className="w-fit h-full z-40 flex justify-center"
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
              <SlideNextButton swipingButtonRef={swipingButtonRef} />
              <SlidePrevButton swipingButtonRefPrev={swipingButtonRefPrev} />
            </SwiperEl>
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] bg-[#0A083A] lsm:hidden"></div>
    </div>
  );
};

export default Promo;
