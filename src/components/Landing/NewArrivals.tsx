import { FC, useEffect, useState } from "react";
import chevronLeft from "../../assets/chevron-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NewArrival from "./NewArrival";
import { FeaturedProInterface } from "./FeaturedPro";
import "swiper/css/autoplay";

const NewArrivals: FC<FeaturedProInterface> = () => {
  const [mobile, setMobile] = useState<boolean>(
    window.innerWidth <= 800 ? true : false
  );

  const [miniLaptop, setMiniLaptop] = useState(
    window.innerWidth <= 1200 ? true : false
  );

  const [smallMobile, setSmallMobile] = useState(
    window.innerWidth <= 500 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 767 ? true : false);
      setMiniLaptop(window.innerWidth <= 1226 ? true : false);
      setSmallMobile(window.innerWidth <= 500 ? true : false);
    });
  }, [mobile, miniLaptop, smallMobile]);

  const newArrivalsData: FeaturedProInterface[] = [
    {
      rating: 5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 110,
      imgSource: "/server-assets/arrival3.png",
      id: "1",
      indexId: 0,
    },
    {
      rating: 4,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 100,
      imgSource: "/server-assets/arrival2.png",
      id: "2",
      indexId: 1,
    },
    {
      rating: 3,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 130,
      imgSource: "/server-assets/arrival3.png",
      id: "3",
      indexId: 2,
    },
    {
      rating: 4.5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 120,
      imgSource: "/server-assets/arrival2.png",
      id: "4",
      indexId: 3,
    },
    {
      rating: 5,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 110,
      imgSource: "/server-assets/arrival3.png",
      id: "1",
      indexId: 0,
    },
    {
      rating: 4,
      description: "Adidas Falcon Shoes for men - 2021 Edition",
      price: 100,
      imgSource: "/server-assets/arrival2.png",
      id: "2",
      indexId: 1,
    },
  ];

  const newArrivals = newArrivalsData.map((data: FeaturedProInterface) => {
    const { rating, description, price, imgSource, id, indexId } = data;

    return (
      <SwiperSlide key={id} className="grid place-items-center">
        <NewArrival
          rating={rating}
          description={description}
          price={price}
          imgSource={imgSource}
          id={id}
          indexId={indexId}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full h-[50vh] sm:h-[40vh] lssm:h-[40vh] flex flex-col items-center justify-start gap-11 pt-5 relative bg-[#F5F5F5]">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-5 md:flex-row md:justify-around md:gap-[5rem]">
        <div className="flex flex-col gap-5 md:items-start">
          <span className="text-2xl font-bold text-center md:text-4xl ">
            New arrivals
          </span>
          <p className="text-center px-16 text-sm text-gray-800 md:text-start md:p-0 md:flex md:flex-col">
            <span>Enjoy the new products from our store.</span>
            <span>Select what you like, enjoy & return.</span>
          </p>
        </div>
        <span className="text-sm text-[#FF3C78] text-center cursor-pointer flex gap-2">
          View all <img src={chevronLeft} alt="" className="h-5" />{" "}
        </span>
      </div>
      <div className="w-full h-[80vh] sm:h-[80vh] sm:top-[6rem] absolute top-[12rem] lssm:h-[70vh] lssm:top-[8rem] lg:w-[80vw]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={smallMobile ? 1 : mobile ? 2 : miniLaptop ? 3 : 4}
          autoplay
          spaceBetween={smallMobile ? 10 : mobile ? 15 : miniLaptop ? 20 : 30}
          className="w-full h-full"
        >
          {newArrivals}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
