import { FormatQuoteTwoTone } from "@mui/icons-material";
import Testimonial from "./Testimonial";
import { Autoplay, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsData } from "../../data";
import SlideNextButton from "../Global/SlideNextButton";
import SlidePrevButton from "../Global/SlidePrev";
import { useRef } from "react";
import leftArrow from "../../assets/arrow-left-circle-1.png";
import rightArrow from "../../assets/arrow-left-circle.png";

const Testimonials = () => {
  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="w-full h-fit grid place-items-center  bg-[#0A083A] py-8">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <span className="text-white text-lg font-bold text-center">
          Customers Opinions
        </span>
        <div className="w-[20rem] h-[10rem] grid place-items-center">
          <Swiper
            modules={[Controller, Autoplay]}
            slidesPerView={1}
            className="w-[90%] h-full"
            spaceBetween={1}
            autoplay={true}
            loop={true}
          >
            {testimonialsData.map((testimony) => {
              const { customerName, rating, testimonial } = testimony;

              return (
                <SwiperSlide className="w-full h-full" key={customerName}>
                  <Testimonial
                    customerName={customerName}
                    rating={rating}
                    testimonial={testimonial}
                  />
                </SwiperSlide>
              );
            })}
            <SlideNextButton swipingButtonRef={swipingButtonRef} />
            <SlidePrevButton swipingButtonRefPrev={swipingButtonRefPrev} />
          </Swiper>
        </div>
        <div className="flex gap-4">
          {[
            { imgUrl: rightArrow, ref: swipingButtonRefPrev },
            { imgUrl: leftArrow, ref: swipingButtonRef },
          ].map((item) => {
            const { imgUrl, ref } = item;
            return (
              <img src={imgUrl} alt="" onClick={() => ref.current?.click()} />
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
