import { useRef } from "react";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";
import mcQueenWear from "../../assets/mcQueenWear.jpeg";
import { testimonialsData } from "../../data";
import Testimonial from "../promo-products/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper";
import "swiper/css";

const Product = () => {
  const colors = ["red", "black", "orange"];

  const theRatingStars: JSX.Element[] = [...Array(Math.floor(4))].map(
    (el: undefined, index: number) => {
      return <img src={filledStar} alt="" key={index} />;
    }
  );

  const theUnfilledStars: JSX.Element[] =
    4 < 5
      ? [...Array(5 - Math.floor(4))].map((el: undefined, index: number) => {
          return <img src={unFilledStar} alt="" key={index} />;
        })
      : [];

  const categoriesRef = useRef<HTMLDivElement | null>(null);

  const imgSources = [
    "/server-assets/image 6.png",
    "/server-assets/image 4.png",
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
      <div className="w-full h-fit py-[2rem] flex justify-start items-center pl-[1rem] gap-2 bg-white">
        <span className="text-base font-[550] text-[rgb(10,8,58)]">Men</span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500">Sneakers</span>
      </div>
      <div className="w-full h-fit py-8 grid place-items-center gap-2">
        <div className="w-full h-fit flex flex-col items-start justify-center gap-4 pl-[1rem]">
          <span className="text-3xl font-bold text-[rgb(10,8,58)]">
            Nike Air Max 270
          </span>
          <div className="w-full flex items-center justify-start gap-8">
            <span className="whitespace-nowrap text-gray-600 font-[550]">
              Available in
            </span>
            <div className="flex gap-3">
              {colors.map((color) => {
                return (
                  <div
                    className={`w-5 h-5 rounded-full`}
                    style={{ background: `${color}` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-8">
            <span className="text-[rgb(10,8,58)] text-2xl font-bold">
              $250.99
            </span>
            <span className="flex gap-2">
              {theRatingStars}
              {theUnfilledStars}
            </span>
          </div>
        </div>
        <div className="w-full h-[20rem] bg-[purple]">
          <Swiper
            modules={[Controller, Autoplay]}
            slidesPerView={1}
            className="w-full h-full"
            spaceBetween={100}
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Product;
