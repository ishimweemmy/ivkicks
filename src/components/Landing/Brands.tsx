import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Brand, { BrandProps } from "./Brand";
import { Pagination } from "swiper";
import leftIcon from "../../assets/leftIcon.png";
import rightIcon from "../../assets/rightIcon.png";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrev";

const Brands = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 768 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 768 ? true : false);
    });
  }, [mobile]);

  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const brands: BrandProps[] = [
    { id: 0, imgSrc: "/server-assets/nike.png" },
    { id: 1, imgSrc: "/server-assets/newBalance.png" },
    { id: 2, imgSrc: "/server-assets/adidas.png" },
    { id: 3, imgSrc: "/server-assets/horse.png" },
    { id: 1, imgSrc: "/server-assets/newBalance.png" },
  ];

  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-end relative bg-[#f5f5f5] px-[5rem] sm:px-[1rem] lg:justify-start lg:pt-[3rem]">
      <div
        className="w-[3.5rem] h-[7rem] rounded-r-full absolute left-0 top-0 lg:rotate-[90deg] lg:left-7 lg:top-[-1.7rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
        }}
      ></div>
      <span className="text-4xl font-bold text-[#0A083A] md:text-5xl">Popular brands</span>
      <div className="w-full h-[70%] flex flex-col items-center justify-center gap-4 p-2 lg:flex-row lg:gap-2 md:w-[90%]">
        <img
          src={leftIcon}
          alt="leftIcon"
          className="w-2 cursor-pointer hidden lg:block"
          onClick={() => swipingButtonRef.current?.click()}
        />
        <Swiper
          modules={[Pagination]}
          slidesPerView={mobile ? 2 : 4}
          className="w-full h-[50%] md:w-[90%] sm:h-[40%] miniTablet:h-[40%] lg:h-[50%]"
          spaceBetween={10}
        >
          {brands.map((brand) => {
            const { id, imgSrc } = brand;

            return (
              <SwiperSlide className="w-[20rem] h-[20rem] md:h-[10rem]" key={id}>
                <Brand id={id} imgSrc={imgSrc} />
              </SwiperSlide>
            );
          })}
          <SlideNextButton swipingButtonRef={swipingButtonRef} />
          <SlidePrevButton swipingButtonRef={swipingButtonRefPrev} />
        </Swiper>
        <img
          src={rightIcon}
          alt="leftIcon"
          className="w-2 cursor-pointer hidden lg:block"
          onClick={() => swipingButtonRefPrev.current?.click()}
        />
        <div className="w-full h-8 flex self-center gap-4 items-center justify-center lg:hidden">
          <img
            src={leftIcon}
            alt="leftIcon"
            className="w-2 cursor-pointer"
            onClick={() => swipingButtonRef.current?.click()}
          />
          <img
            src={rightIcon}
            alt="leftIcon"
            className="w-2 cursor-pointer"
            onClick={() => swipingButtonRefPrev.current?.click()}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
