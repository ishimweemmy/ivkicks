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

const Promo = () => {
  const [hover, setHovered] = useState(false);

  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const [controlledSwiper, setControlledSwiper] = useState<Swiper | undefined>(
    undefined
  );

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
      <div className="w-screen h-fit bg-[#0A083A] py-[1rem] flex flex-col items-center justify-center">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem] lsm:w-[45%] lsm:self-start lsm:items-start lsm:ml-[1rem]">
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
        <div className="w-full h-fit flex flex-col mt-[2rem] relative ">
          <div className="w-full h-fit py-[2rem] bg-[blue flex flex-col items-center jusify-center lsm:h-[22rem] xMiniTablet:h-[25rem] md:h-[28rem] xLgMd:h-[32rem]">
            <div className="w-[18rem] h-[10rem] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 flex items-end justify-center pb-[1rem] relative lsm:w-[80%] lg:w-[50rem] lsm lsm:h-[90%] ">
              {/* dots around the circleShoe  */}
              <div className="h-2 w-2 rounded-full border absolute left-[2rem] top-[2.5rem] bg-[#0A083A] lsm:top-[41%] lsm:left-[6%]"></div>
              <div className="h-2 w-2 rounded-full border absolute translate-x-[50%] top-[-.4rem] bg-[#0A083A]"></div>
              <div
                className="h-2 w-2 rounded-full border absolute right-[2rem] top-[2.5rem] bg-[#0A083A] hover:border-none hover:bg-[#FF3C78] lsm:h-3 lsm:w-3 lsm:right-[18%] lsm:top-[16%]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ cursor: `pointer` }}
              ></div>

              {/* dots on the left part of the circle */}

              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[1.7rem] top-[3.1rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[16.5%] `}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[1.4rem] top-[3.5rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[15%]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[1.1rem] top-[3.9rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[13.5%]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[2.7rem] top-[2rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[22%]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[3rem] top-[1.7rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[24%]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[3.4rem] top-[1.4rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }] lsm:h-2 lsm:w-2 lsm:right-[20%] lsm:top-[15%]`}
              ></div>

              {/* inner circleShoe */}
              <div className="w-[85%] h-[85%] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 border-l-[#fa9358] lsm:h-[86%]"></div>

              {/* bottom circles */}
              <div className="h-2 w-2 rounded-full border absolute right-[-.3rem] bottom-[-.4rem]"></div>
              <div className="h-2 w-2 rounded-full border absolute left-[-.3rem] bottom-[-.4rem]"></div>
            </div>
          </div>
          <div className="w-[100%] h-[15rem] absolute bottom-[-8rem] translate-x-[0%] z-10 lsm:bottom-[-1rem]">
            <SwiperEl
              modules={[Controller, Autoplay]}
              slidesPerView={1}
              className="w-full h-full"
              spaceBetween={2}
              autoplay={true}
              controller={{ control: controlledSwiper }}
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
            </SwiperEl>
          </div>
          <div className="w-full h-[12rem] pt-4 bg-[#12104d] absolute bottom-[-13rem] flex flex-col items-center justify-between lsm:h-[10rem]">
            <div className="w-full h-4 flex justify-center mt-[2.5rem] px-3 relative z-20 gap-[80%]">
              <FiArrowLeft
                className="text-white text-lg"
                onClick={() => swipingButtonRefPrev.current?.click()}
                style={{ cursor: `pointer` }}
              />
              <FiArrowRight
                className="text-white text-lg"
                onClick={() => swipingButtonRef.current?.click()}
                style={{ cursor: `pointer` }}
              />
            </div>
            <div className="w-[10rem] h-[3.3rem] relative bottom-0 bg-transparent z-0 grid place-items-center">
              <SwiperEl
                modules={[Controller, Autoplay]}
                slidesPerView={1}
                className="w-full h-full"
                spaceBetween={30}
                autoplay={true}
                onSwiper={setControlledSwiper}
                loop={true}
              >
                {promoProducts.map((promoProduct) => {
                  const { sneakerName, ...otherProps } = promoProduct;

                  return (
                    <SwiperSlide
                      className="flex items-center justify-centerz-40"
                      key={sneakerName}
                    >
                      <p className="w-full text-center text-white text-base font-bold border-b-4 border-b-[#ff3c78]">
                        <span className="whitespace-nowrap block">
                          {sneakerName}
                        </span>
                        <span>sneakers</span>
                      </p>
                    </SwiperSlide>
                  );
                })}
              </SwiperEl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
