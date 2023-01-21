import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Autoplay, Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { youMayLike } from "../../data";
import YouMayLike from "../Products/YouMayLike";
import { useEffect, useRef, useState } from "react";
import SlideNextButton from "./SlideNextButton";
import SlidePrev from "./SlidePrev";

const YoumayLike = () => {
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleIsDraggable = () => {
    setIsDraggable((prev) => {
      console.log(!prev);
      return !prev;
    });
  };

  const [tablet, setTablet] = useState(window.innerWidth >= 550);
  const [miniLaptop, setMiniLaptop] = useState(window.innerWidth >= 900);
  const [laptop, setLaptop] = useState(window.innerWidth >= 1500);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTablet(window.innerWidth >= 550);
      setMiniLaptop(window.innerWidth >= 900);
      setLaptop(window.innerWidth >= 1500);
    });
  }, [tablet, miniLaptop, laptop]);

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-full h-full pt-[1rem] flex justify-between items-center px-4 gap-2 bg-white">
        <span className="text-start text-xl text-[rgb(10,8,58)] font-bold xlarge:text-3xl">
          You may also like
        </span>

        <div className="w-[5rem] h-[5rem] flex items-center justify-center gap-1 xlarge:w-[6rem] xlarge:h-[6rem]">
          <BsFillCaretLeftFill
            className="text-xs text-gray-400 xlarge:text-sm"
            onClick={() => prevButtonRef.current?.click()}
          />
          <span
            className={`w-[2rem] h-[2rem] rounded-full text-[.5rem] font-bold uppercase grid place-items-center transition xlarge:w-[2.5rem]  xlarge:h-[2.5rem] xlarge:text-[.6rem] ${
              isDraggable
                ? "bg-[#315affc0] text-white"
                : "text-[rgb(10,8,58)] border border-gray-400"
            }`}
            onClick={handleIsDraggable}
          >
            Drag
          </span>
          <BsFillCaretRightFill
            className="text-xs text-gray-400 xlarge:text-sm"
            onClick={() => nextButtonRef.current?.click()}
          />
        </div>
      </div>
      <div className="youMayLikeSwiper w-full h-[30rem] px-[1rem] miniSm:h-[45rem]">
        <Swiper
          modules={[Controller, Autoplay, Pagination]}
          slidesPerView={laptop ? 4 : miniLaptop ? 3 : tablet ? 2 : 1}
          className="w-full h-full bg-white"
          spaceBetween={20}
          autoplay={true}
          loop={true}
          noSwiping={!isDraggable}
          noSwipingClass="swiper-slide"
          pagination
        >
          {youMayLike.map((data) => {
            const { name, company, price, id, imgSrc } = data;
            return (
              <SwiperSlide key={id} className="h-full">
                <YouMayLike
                  name={name}
                  company={company}
                  price={price}
                  imgSrc={imgSrc}
                  id={id}
                />
                <SlideNextButton swipingButtonRef={nextButtonRef} />
                <SlidePrev swipingButtonRefPrev={prevButtonRef} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default YoumayLike;
