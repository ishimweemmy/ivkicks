import { FiChevronLeft } from "react-icons/fi";
import { Autoplay, Controller, Pagination as SwiperPagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Collection from "../components/Products/Collection";
import SlideNextButton from "../components/Global/SlideNextButton";
import { categoryProData, collections } from "../data";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import CategoryProduct from "../components/Products/CategoryProduct";
import Subscriptions from "../components/Landing/Subscriptions";
import FacAccordion from "../components/promo-products/FacAccordion";
import { IoIosRemove, IoMdAdd, IoMdCheckmark } from "react-icons/io";

const Collections = () => {
  const nextButtonRef = useRef<HTMLDivElement | null>(null);

  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState([
    { label: "Newest", value: "newest", open: false },
    { label: "Most popular", value: "mostPopular", open: false },
    { label: "Lowest price", value: "lowestPrice", open: false },
    { label: "Highest price", value: "highestPrice", open: false },
  ]);

  const handleChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
  };

  const [mobile, setIsMobile] = useState(window.innerWidth < 430);
  const [lsm, setLsm] = useState(window.innerWidth <= 500);

  const [baseValue, setBaseValue] = useState(mobile ? 1 : 2);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 430);
      setBaseValue(mobile ? 1 : 2);
      setLsm(window.innerWidth <= 500);
    });
  }, [mobile, baseValue, lsm]);

  const [page, setPage] = useState(1);
  const [indexes, setIndexes] = useState<{
    firstIndex: number;
    secondIndex: number;
  }>({
    firstIndex: page == 1 ? 0 : page * baseValue - baseValue,
    secondIndex: page == 1 ? baseValue : page * baseValue,
  });

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setIndexes(() => ({
      firstIndex: page == 1 ? 0 : page * baseValue - baseValue,
      secondIndex: page == 1 ? baseValue : page * baseValue,
    }));
  }, [page, baseValue]);

  const handleFiltersMdopen = (e: SyntheticEvent) => {
    
  };
  return (
    <div className="w-full h-fit py-16 flex flex-col items-center justify-center gap-4 bg-white">
      <div className="w-full h-full hidden pt-[1rem] md:flex justify-start items-center pl-[1rem] gap-4 bg-white lsm:px-8 xl:px-20 2xl:px-24">
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Home
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Collections
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500 2xl:text-lg">
          Running Sneakers
        </span>
      </div>
      <span className="w-full h-fit py-2 flex items-center justify-start gap-2 text-sm text-[rgb(10,8,58)] pl-4 font-bold lssm:text-lg md:hidden ">
        <FiChevronLeft />
        Running sneakers
      </span>
      <div className="w-full h-fit pt-[5rem] pb-[2rem] flex flex-col bg-[#f5f5f5] items-center justify-center gap-4 md:grid md:grid-cols-[40%_60%] md:place-items-start ">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-6 md:items-start md:px-8">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
            Running Sneakers
          </span>
          <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider px-8 lsm:text-start md:px-0">
            For parties, the sneakers are good depending on your favourite, you
            can find the one that fits you.
          </p>
          <button
            className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
            style={{
              boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
            }}
          >
            Shop now
          </button>
        </div>
        <div className={`collectionsSwiper w-full h-[20rem] px-[1rem]`}>
          <Swiper
            modules={[Controller, Autoplay, SwiperPagination]}
            className="w-full h-full"
            slidesPerView={lsm ? 1 : 2}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination
          >
            {collections.map((data) => {
              const { id, imgSrc, categoryName, productsNbr } = data;
              return (
                <SwiperSlide key={id} className="h-full">
                  <Collection
                    id={id}
                    imgSrc={imgSrc}
                    categoryName={categoryName}
                    productsNbr={productsNbr}
                  />
                  <SlideNextButton swipingButtonRef={nextButtonRef} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-white py-8">
        <div className="w-full h-fit flex justify-between items-center px-4">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
            Performance Sneakers
          </span>
          <FormControl className="w-[50%] md:w-[30%]">
            <InputLabel>filter by</InputLabel>
            <Select value={filter} label="Filter" onChange={handleChange}>
              {filters.map((filter) => {
                const { label, value } = filter;
                return <MenuItem value={value}>{label}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="w-full h-full flex gap-4">
          <div className="w-full h-full hidden md:flex flex-col gap-4 bg-[blue]">
            <Accordion
              style={{
                cursor: `none`,
                boxShadow: `none`,
                background: `#f5f5f5`,
                borderRadius: 0,
              }}
              className={`w-full pb-1 shadow-none border-b border-gray-300 rounded-none miniTablet:pb-[2rem] miniTablet:pt-[2rem]`}
            >
              <AccordionSummary
                // expandIcon={
                //   expanded ? (
                //     <IoIosRemove className={`text-gray-600 text-xl`} />
                //   ) : (
                //     <IoMdAdd className={`text-gray-600 text-xl`} />
                //   )
                // }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="w-full text-lg font-bold text-[#0A083A]  transition-all duration-700 flex justify-between items-center lg:text-xl">
                  {/* {question} */}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <span className="text-xs font-semibold lg:text-sm mini2xl:text-base md:pr-[65%] text-gray-600">
                  {/* {answer} */}
                  <IoMdCheckmark className={`text-gray-600 text-xl`} />
                </span>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <div className={`w-full h-fit flex gap-2 px-4 md:grid`}>
              {categoryProData
                .slice(indexes.firstIndex, indexes.secondIndex)
                .map((prodData) => {
                  const {
                    id,
                    imgSrc,
                    price,
                    discount,
                    sneakersName,
                    sneakersType,
                  } = prodData;

                  return (
                    <CategoryProduct
                      key={id}
                      id={id}
                      imgSrc={imgSrc}
                      price={price}
                      discount={discount}
                      sneakersName={sneakersName}
                      sneakersType={sneakersType}
                    />
                  );
                })}
            </div>
            <Pagination
              count={
                mobile ? categoryProData.length : categoryProData.length / 2
              }
              siblingCount={0}
              defaultPage={1}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
      <Subscriptions />
    </div>
  );
};

export default Collections;
