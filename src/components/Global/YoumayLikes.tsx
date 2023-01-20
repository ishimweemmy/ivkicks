import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Autoplay, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { youMayLike } from "../../data";
import YouMayLike from "../Products/YouMayLike";
import { useRef, useState } from "react";
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

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-full h-full pt-[1rem] flex justify-between items-center px-4 gap-2 bg-white">
        <span className="text-start text-xl text-[rgb(10,8,58)] font-bold">
          You may also like
        </span>

        <div className="w-[5rem] h-[5rem] flex items-center justify-center gap-1">
          <BsFillCaretLeftFill
            className="text-xs text-gray-400"
            onClick={() => prevButtonRef.current?.click()}
          />
          <span
            className={`w-[2rem] h-[2rem] rounded-full text-[.5rem] font-bold uppercase grid place-items-center transition ${
              isDraggable
                ? "bg-[#315affc0] text-white"
                : "text-[rgb(10,8,58)] border border-gray-400"
            }`}
            onClick={handleIsDraggable}
          >
            Drag
          </span>
          <BsFillCaretRightFill
            className="text-xs text-gray-400"
            onClick={() => nextButtonRef.current?.click()}
          />
        </div>
      </div>
      <div className="w-full h-[30rem] px-[1rem] miniSm:h-[45rem]">
        <Swiper
          modules={[Controller, Autoplay, Navigation]}
          slidesPerView={1}
          className="w-full h-[90%] bg-white"
          spaceBetween={20}
          autoplay={true}
          loop={true}
          noSwiping={!isDraggable}
          noSwipingClass="swiper-slide"
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
