import { useEffect, useRef, useState } from "react";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Controller, Pagination } from "swiper";
import { Add } from "@mui/icons-material";
import Size from "./Size";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FacAccordion from "../promo-products/FacAccordion";
import { theLookData } from "../../data";
import TheLook from "./TheLook";
import YoumayLike from "../Global/YoumayLikes";

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
    "/server-assets/image 6.png",
  ];

  const [availableSizes, setAvailableSizes] = useState([
    { isActive: false, isAvailable: true, size: 6 },
    { isActive: false, isAvailable: false, size: 6.8 },
    { isActive: false, isAvailable: false, size: 7 },
    { isActive: false, isAvailable: true, size: 8 },
    { isActive: false, isAvailable: true, size: 8.5 },
    { isActive: false, isAvailable: true, size: 9 },
    { isActive: false, isAvailable: true, size: 10 },
    { isActive: false, isAvailable: false, size: 10.5 },
  ]);

  const accordionData = [
    {
      question: "Material",
      answer:
        "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
      panel: "panel1",
    },
    {
      question: "Delivery & Returns",
      answer:
        "Yeah, the discounts are available as well as the promo codes, but not on all the products",
      panel: "panel2",
    },
    {
      question: "Description",
      answer:
        "Yeah, that is very simple after you have added the product or you didn't that's also possible, click on the basket icon in the right corner and you're good to go",
      panel: "panel3",
    },
    {
      question: "Reviews",
      answer:
        "Yeah, that is very simple after you have added the product or you didn't that's also possible, click on the basket icon in the right corner and you're good to go",
      panel: "panel4",
    },
  ];

  const toggleIsActive = (size: number) => {
    setAvailableSizes((prevSizes) => {
      return prevSizes.map((prevSize) => {
        if (prevSize.size === size) {
          if (prevSize.isAvailable) {
            prevSizes.forEach((size) => {
              if (size.isActive) size.isActive = false;
            });
            return { ...prevSize, isActive: !prevSize.isActive };
          } else {
            return prevSize;
          }
        } else {
          return prevSize;
        }
      });
    });
  };

  const [nbrOfShoes, setNbrOfShoes] = useState("");

  const handleSelectionChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setNbrOfShoes(event.target.value as string);
  };

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white">
      <div className="w-full h-full pt-[1rem] flex justify-start items-center pl-[1rem] gap-2 bg-white">
        <span className="text-base font-[550] text-[rgb(10,8,58)]">Men</span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500">Sneakers</span>
      </div>
      <div className="w-full h-full py-8 grid place-items-center">
        <div className="w-full h-full flex flex-col items-start justify-center gap-4 pl-[1rem] bg-[#f5f5f5] pt-[2rem]">
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
        <div className="w-[20rem] h-[15rem] flex flex-col items-center justify-center gap-4 bg-[#f5f5f5]">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            className="w-full h-full"
            spaceBetween={10}
            onSlideChange={(swiper) => {
              if (categoriesRef.current) {
                categoriesRef.current.style.transform = `translateX(${
                  swiper.activeIndex * 38
                }%)`;
              }
            }}
          >
            {imgSources.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt=""
                      className="max-w-none w-full h-full"
                    />
                    <div className="w-11 h-11 rounded-full backdrop-blur-md absolute top-11 left-32 grid place-items-center border border-gray-400">
                      <Add />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full h-[3rem] bg-white grid place-items-center">
          <div className="rounded-full w-[80%] h-[.3rem] bg-[#f5f5f5] self-center overflow-clip ">
            <div
              className={`w-[40%] lg:w-[56%] h-full rounded-full bg-[#02BE83] transition-all duration-500`}
              ref={categoriesRef}
            ></div>
          </div>
        </div>
        <div className="w-full h-full bg-white flex flex-col items-start justify-center gap-5 px-[1rem]">
          <span className="text-lg font-semibold text-[rgb(10,8,58)]">
            Details
          </span>
          <p className="text-gray-500 text-sm font-medium">
            They agree with reality to a high degree of accuracy as tested in
            the experiment after experiment
          </p>
          <div className="w-full h-fit flex justify-between">
            <span className="text-lg font-semibold text-[rgb(10,8,58)]">
              Select size
            </span>
            <span className="text-lg font-semibold text-gray-500 underline hidden ">
              Size guide
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((availableSize) => {
              const { isActive, isAvailable, size } = availableSize;
              return (
                <Size
                  isActive={isActive}
                  isAvailable={isAvailable}
                  size={size}
                  toggleIsActive={toggleIsActive}
                />
              );
            })}
          </div>
          <span className="text-lg font-semibold text-gray-500 underline">
            Size guide
          </span>
          <div className="w-full flex gap-3">
            <FormControl className="w-[30%]">
              <Select
                value={nbrOfShoes}
                label="size"
                onChange={handleSelectionChange}
              >
                {[...Array(10)].map((item, index) => {
                  return (
                    <MenuItem value={index + 1}>
                      <span className="text-[rgb(10,8,58)] font-bold">
                        {index + 1}
                      </span>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <button className="w-full h-full bg-[rgb(10,8,58)] text-white text-sm font-bold">
              Add to cart
            </button>
          </div>
          <div className="w-full h-fit flex flex-col mt-12 mb-2">
            {accordionData.map((data) => {
              return (
                <FacAccordion
                  expanded={expanded === data.panel}
                  handleChange={handleChange}
                  question={data.question}
                  panel={data.panel}
                  answer={data.answer}
                  page="product"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[90%] h-fit flex flex-col items-start justify-center gap-3 pl-[2re] bg-white">
        <span className="text-start text-xl text-[rgb(10,8,58)] font-bold">
          complete the look
        </span>
        <span className="text-start text-sm text-gray-500 font-bold">
          3 items
        </span>
        <div className="w-full h-[28rem] grid grid-rows-[90%_5%] place-items-center ">
          <Swiper
            modules={[Controller, Autoplay]}
            slidesPerView={1}
            className="w-full h-[90%] bg-white"
            spaceBetween={20}
            autoplay={true}
            loop={true}
            onSlideChange={(swiper) => {
              if (swiper.activeIndex > theLookData.length) {
                setActiveSlide(1);
              } else {
                setActiveSlide(swiper.activeIndex);
              }
            }}
          >
            {theLookData.map((data) => {
              const { name, type, price, id, imgSrc } = data;
              return (
                <SwiperSlide key={id} className="h-full">
                  <TheLook
                    name={name}
                    type={type}
                    price={price}
                    id={id}
                    imgSrc={imgSrc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="w-[80%] h-[.2rem] flex items-between justify-center gap-4">
            {theLookData.map((look, index) => {
              return (
                <div
                  className={`w-full h-full ${
                    activeSlide === index + 1 ? "bg-[#315BFF]" : "bg-[#f5f5f5]"
                  } transition duration-700 `}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <YoumayLike />
    </div>
  );
};

export default Product;
