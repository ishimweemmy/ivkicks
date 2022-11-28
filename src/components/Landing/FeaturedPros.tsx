import { useEffect, useRef, useState } from "react";
import { FeaturedProInterface } from "./FeaturedPro";
import FeaturedPro from "./FeaturedPro";
import chevronLeft from "../../assets/chevron-right.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const FeaturedPros = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 765 ? true : false
  );
  const [desktop, setDesktop] = useState<boolean>(
    window.innerWidth <= 1024 ? true : false
  );

  const [tablet, setTablet] = useState<boolean>(
    window.innerWidth <= 769 ? true : false
  );

  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 765 ? true : false);
      setTablet(window.innerWidth <= 769 ? true : false);
      setDesktop(window.innerWidth <= 1024 ? true : false);
    });
  }, [mobile, desktop, tablet]);

  const featuredProducts: FeaturedProInterface[] = [
    {
      rating: 5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 110,
      imgSource: "/server-assets/image 1.png",
      id: "1",
      indexId: 0,
    },
    {
      rating: 4,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 100,
      imgSource: "/server-assets/image 4.png",
      id: "2",
      indexId: 1,
    },
    {
      rating: 3,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 130,
      imgSource: "/server-assets/image 6.png",
      id: "3",
      indexId: 2,
    },
    {
      rating: 4.5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 120,
      imgSource: "/server-assets/lastImage.png",
      id: "4",
      indexId: 3,
    },
    {
      rating: 5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 110,
      imgSource: "/server-assets/image 1.png",
      id: "1",
      indexId: 0,
    },
    {
      rating: 4,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 100,
      imgSource: "/server-assets/image 4.png",
      id: "2",
      indexId: 1,
    },
  ];

  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center py-[4rem] gap-[3rem] lg:pl-[5rem]">
      <div className=" w-full flex justify-between items-center sm:justify-center md:justify-around lgMd:justify-between lg:justify-between xl:justify-between z-0 md:px-[0rem] lgMd:px-[8rem] ">
        <h1 className="text-3xl font-bold text-[#0A083A] lg:text-4xl xl:text-5xl whitespace-nowrap">
          Featured Products
        </h1>
        <span className="text-sm text-[#FF3C78] cursor-pointer hidden lg:flex md:flex lgMd:flex xl:flex 2xl:flex lg:text-base md:items-center md:justify-center">
          <span className="font-semibold text-lg">View all</span>{" "}
          <img
            src={chevronLeft}
            alt=""
            className="h-5 lg:h-5 lg:w-5"
          />{" "}
        </span>
      </div>
      {mobile ? (
        <div className="w-full flex flex-col items-center justify-center gap-[5rem] md:flex-row md:gap-0">
          {featuredProducts.map((product: FeaturedProInterface) => {
            const { rating, description, price, imgSource, id, indexId } =
              product;
            return (
              <FeaturedPro
                key={id}
                rating={rating}
                description={description}
                price={price}
                imgSource={imgSource}
                id={id}
                indexId={indexId}
                from="desktop"
              />
            );
          })}
        </div>
      ) : (
        <>
          <div className="w-full h-[50vh] flex items-center justify-center xLgMd:h-[40vh] lgMd:z-30 lg:h-[50vh] lgMd:h-[50vh] lg:w-[80vw] ">
            <Swiper
              slidesPerView={desktop ? 2 : 4}
              autoplay
              spaceBetween={50}
              className="w-full h-full"
              onSlideChange={(swiper) => {
                if (categoriesRef.current) {
                  categoriesRef.current.style.transform = `translateX(${
                    swiper.activeIndex * 40
                  }%)`;
                }
              }}
            >
              {featuredProducts.map((product: FeaturedProInterface) => {
                const { rating, description, price, imgSource, id, indexId } =
                  product;
                return (
                  <SwiperSlide key={id} className="w-screen md:w-[23rem] ">
                    <FeaturedPro
                      rating={rating}
                      description={description}
                      price={price}
                      imgSource={imgSource}
                      id={id}
                      indexId={indexId}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div
            className="rounded-full w-[60%] h-[0.5rem] bg-[#f5f5f5] self-center overflow-clip "
          >
            <div
              className={`w-[40%] lg:w-[56%] h-full rounded-full bg-[#02BE83] transition-all duration-500`}
              ref={categoriesRef}
            ></div>
          </div>
        </>
      )}
      <span className="text-sm text-[#FF3C78] cursor-pointer flex gap-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
        view all <img src={chevronLeft} alt="" className="h-5" />{" "}
      </span>
    </div>
  );
};

export default FeaturedPros;
