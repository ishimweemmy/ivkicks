import heroImg from "../assets/image 3.png";
import heartIcon from "../assets/Vector.png";
import checkIcon from "../assets/Group 4.png";
import mainHeroImg from "../assets/Group 267.svg";
import leftArrow from "../assets/arrow-left-circle-1.png";
import rightArrow from "../assets/arrow-left-circle.png";
import personImage from "../assets/Ellipse 6.png";
import FeaturedPros from "../components/Landing/FeaturedPros";
import lock from "../assets/lock.png";
import Accessories from "../components/Landing/Accessories";
import BestSeller from "../components/Landing/BestSeller";
import NewArrivals from "../components/Landing/NewArrivals";
import WhyUs from "../components/Landing/WhyUs";
import Categories from "../components/Landing/Categories";
import Brands from "../components/Landing/Brands";
import Subscriptions from "../components/Landing/Subscriptions";

const Home = () => {
  return (
    <div className="w-screen h-fit flex sm:flex-col xs:flex-col relative overflow-hidden">
      <div
        className="w-full pb-[4rem] mt-[4rem] h-fit flex flex-col md:flex-row md:items-center xs:mt-0 overflow-hidden lg:pl-[5rem]"
      >
        <div className="w-full flex flex-col gap-5 md:pl-[2rem] md:gap-[3rem]">
          <h1 className="text-3xl font-bold text-center text-[#0A083A] md:text-start lg:text-5xl xl:text-6xl 2xl:text-7xl xl:tracking-tighter">
            <span className="whitespace-nowrap">Get your awesome</span>{" "}
            sneakers.
          </h1>
          <p className="text-sm text-center text-gray-800 leading-5 tracking-wide px-9 md:text-start md:px-0 md:text-base md:text-gray-700 md:pr-[1rem] xl:text-base xl:font-medium xl:pr-[20rem]">
            We offer the best deals in our shop.check them out now. We have
            awesome on sale for you.
          </p>
          <div className="flex items-center justify-center gap-[2rem] w-full md:justify-start">
            <button
              className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
              style={{ boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px" }}
            >
              Shop now
            </button>
            <img
              src={heartIcon}
              alt=""
              className="w-4 h-4 cursor-pointer xl:w-6 xl:h-6"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[1rem] pl-24 mt-[1rem] md:justify-start md:p-0 md:flex-row md:gap-[4rem] xMiniTablet:items-center xMiniTablet:mr-[25%] lsm:ml-[0%] md:pt-4 lssm:items-center lssm:mr-[50%]">
            <div className="flex items-center justify-center gap-4">
              <img src={checkIcon} alt="" className="w-[1.3rem]" />
              <span className="text-xs text-gray-800 whitespace-pre xl:text-base xl:font-medium xMiniTablet:text-base lsm:text-sm">
                Free shipping
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img src={checkIcon} alt="" className="w-[1.3rem]" />
              <span className="text-xs text-gray-800 whitespace-nowrap xl:text-base xl:font-medium xMiniTablet:text-base lsm:text-sm">
                Free returns.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center ">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={heroImg}
              alt=""
              className="absolute w-[18rem] md:w-auto md:max-w-sm xl:scale-[1.6] xl:z-10"
            />
            <img
              src={mainHeroImg}
              alt=""
              className="md:w-[100rem] md:max-w-md xl:max-w-2xl xl:relative xl:z-0 xl:bottom-[-2rem] "
            />
            <div
              className="decoration w-8 h-8 rounded-full absolute md:right-[30%] md:self-center md:bottom-[20%] xl:bottom-[20%] xl:z-40"
              style={{
                background:
                  "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
              }}
            ></div>
            <div
              className="w-[15rem] md:w-[15rem] xl:w-[20rem] h-fit p-3 flex items-center justify-center rounded-[2rem] absolute bottom-[7rem] bg-white gap-2 md:h-[4rem] tracking-tight xl:z-10 xl:self-center xl:left-[-7rem] lg:left-[-4rem] lg:bottom-[8rem] lg:self-center xl:bottom-[13rem] sm:h-[15%] 2xl:left-0 "
              style={{ boxShadow: "0px 20px 30px rgba(64, 103, 254, 0.15)" }}
            >
              <div className="w-[2rem] h-[2rem] bg-white grid place-items-center rounded-full shadow-slate-400 shadow-xl absolute right-5 top-[-1rem]">
                <img src={lock} alt="" width={12} />
              </div>
              <img src={personImage} alt="" />
              <span className="text-xs xl:text-sm xl:">
                <b>Joan</b> has just purchased these sneakers right now.
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={rightArrow} alt="" className="cursor-pointer" />
            <img src={leftArrow} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <FeaturedPros />
      <Accessories />
      <BestSeller
        rating={5}
        improvement={"Improved stability, traction control & sole handling"}
        description={"Adidas Falcon Shoes for women - 2021 Edition"}
        price={120.5}
      />
      <NewArrivals
        rating={0}
        description={""}
        price={90}
        imgSource={""}
        id={""}
        indexId={0}
      />
      <WhyUs />
      <Categories />
      <Brands />
      <Subscriptions />
    </div>
  );
};

export default Home;
