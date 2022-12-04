import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper as SwiperEl, SwiperSlide } from "swiper/react";
import SlideNextButton from "../../../components/Landing/SlideNextButton";
import SlidePrevButton from "../../../components/Landing/SlidePrev";
import PromoProduct, {
  PromoProductProps,
} from "../../../components/promo-products/PromoProduct";
import "swiper/css";
import "swiper/css/autoplay";
import Swiper, { Autoplay, Controller } from "swiper";
import Circle from "../../../components/promo-products/Circle";

const Promo = () => {

  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const promoProducts: PromoProductProps[] = [
    {
      sneakerName: "Nike Speed",
      madeOf: "Rubber Sole",
      durabilityType: "durable",
      imgSrc: "/server-assets/image 1.png",
      userImage: "/server-assets/user.jpg",
      userTestimonial: "Nike speed are amazing!",
      rating: 5,
    },
    {
      sneakerName: "Alexander mcQueen",
      madeOf: "wool",
      durabilityType: "durable",
      imgSrc: "/server-assets/alexander.png",
      userImage: "/server-assets/user.jpg",
      userTestimonial: "These mcQueens are awesome",
      rating: 5,
    },
    {
      sneakerName: "Nike Yeezy",
      madeOf: "cotton",
      durabilityType: "durable",
      imgSrc: "/server-assets/image 1.png",
      userImage: "/server-assets/user.jpg",
      userTestimonial: "These yeezy are awesome",
      rating: 5,
    },
    {
      sneakerName: "Nike Yeezy",
      madeOf: "cotton",
      durabilityType: "durable",
      imgSrc: "/server-assets/yeezy.png",
      userImage: "/server-assets/user.jpg",
      userTestimonial: "These yeezy are awesome",
      rating: 5,
    },
    {
      sneakerName: "Nike Yeezy",
      madeOf: "cotton",
      durabilityType: "durable",
      imgSrc: "/server-assets/yeezy1.png",
      userImage: "/server-assets/user.jpg",
      userTestimonial: "These yeezy are awesome",
      rating: 5,
    },
  ];

  return (
    <div className="w-full h-fit">
      <div className="w-screen h-full bg-[#0A083A] py-[1rem] grid lsm:grid-cols-2 lsm:grid-rows-promoTopLsm place-items-center gap-[1rem]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem] lsm:items-start lsm:ml-[1rem]">
          <span className="text-3xl text-center text-[#FF3C78] font-black lsm:text-start">
            Built for speed.
          </span>
          <p className="text-white text-sm text-center leading-5 tracking-wide px-9 lsm:px-0 lsm:text-start">
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
        <div></div>
        <div className="w-full h-full flex flex-col items-center justify-center lsm:col-span-2">
          <Circle />
          <div className="w-full h-[22rem] bg-[#0000ff22] relative bottom-[7rem] flex items-center justify-center">
            {/* <SwiperEl
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
                } = promoProduct;

                return (
                  <SwiperSlide className="w-full h-full z-40" key={sneakerName}>
                    <PromoProduct
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
            </SwiperEl> */}
            <PromoProduct sneakerName={'Alexander mcQueen'} madeOf={'Rubber Sole'} durabilityType={'durable'} imgSrc={'/server-assets/alexander.png'} userImage={'/server-assets/user.jpg'} userTestimonial={'These Sneakers make confortable'} rating={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
