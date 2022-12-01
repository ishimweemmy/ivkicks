import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PromoProduct from "../../../components/promo-products/PromoProduct";

const Promo = () => {
  const [hover, setHovered] = useState(false);
  return (
    <div className="w-full h-fit">
      <div className="w-screen h-fit bg-[#0A083A] py-[1rem] flex flex-col items-center justify-center">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem]">
          <span className="text-3xl text-center text-[#FF3C78] font-black">
            Built for speed.
          </span>
          <p className="text-white text-sm text-center leading-5 tracking-wide px-9">
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
        <div className="w-full h-fit flex flex-col mt-[2rem] relative">
          <div className="w-full h-fit py-[2rem] bg-[blue flex flex-col items-center jusify-center">
            <div className="w-[18rem] h-[10rem] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 flex items-end justify-center pb-[1rem] relative ">
              {/* dots around the circleShoe  */}
              <div className="h-2 w-2 rounded-full border absolute left-[2rem] top-[2.5rem] bg-[#0A083A]"></div>
              <div className="h-2 w-2 rounded-full border absolute translate-x-[50%] top-[-.4rem] bg-[#0A083A]"></div>
              <div
                className="h-2 w-2 rounded-full border absolute right-[2rem] top-[2.5rem] bg-[#0A083A] hover:border-none hover:bg-[#FF3C78]"
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
                }] `}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[1.4rem] top-[3.5rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[1.1rem] top-[3.9rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[2.7rem] top-[2rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[3rem] top-[1.7rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${
                  !hover && "border"
                } absolute right-[3.4rem] top-[1.4rem] bg-[${
                  hover ? "#FF3C78" : "#0A083A"
                }]`}
              ></div>

              {/* inner circleShoe */}
              <div className="w-[85%] h-[85%] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 border-l-[#fa9358]"></div>

              {/* bottom circles */}
              <div className="h-2 w-2 rounded-full border absolute right-[-.3rem] bottom-[-.4rem]"></div>
              <div className="h-2 w-2 rounded-full border absolute left-[-.3rem] bottom-[-.4rem]"></div>
            </div>
          </div>
          <div className="w-[100%] h-[15rem] absolute bottom-[-8rem] translate-x-[0%] z-10">
            <PromoProduct
              sneakerName="Nike Speed"
              madeOf="Rubber Sole"
              durabilityType="durable"
              imgSrc="/server-assets/image 4.png"
              userImage="/server-assets/user.jpg"
              userTestimonial="Nike speed are amazing!"
              rating={5}
            />
          </div>
          <div className="w-full h-[12rem] pt-4 bg-[#34325A] absolute bottom-[-13rem] z-0 flex flex-col items-center justify-between">
            <div className="w-full h-4 flex justify-between mt-[2.5rem] px-3">
              <FiArrowLeft className="text-white text-lg" />
              <FiArrowRight className="text-white text-lg" />
            </div>
            <div className="w-full h-[5rem] flex items-end justify-center gap-3 relative bottom-0">
                <span className="text-center text-white text-lg font-bold border-b-4 border-b-[#ff3c78] mx-[1.2rem] ">Nike Speed shoes</span>
                <span className="text-center text-white text-lg font-bold border-b-4 border-b-[#ff3c78] mx-[1.2rem] ">Nike Sonic shoes</span>
            </div>
          </div>
        </div>
        {/* <div className="w-full py-16"></div> */}
      </div>
    </div>
  );
};

export default Promo;
