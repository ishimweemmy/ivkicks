import { TextField } from "@material-ui/core";
import YoumayLikes from "../components/Global/YoumayLikes";
import CartItem from "../components/cart/CartItem";
import SummaryField from "../components/cart/SummaryField";
import { IoMdArrowDropleft } from "react-icons/io";

const Cart = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col items-center justify-center gap-2 bg-white px-2 circleLg:border-t">
      <div className="w-full h-fit grid place-items-center gap-8 circleLg:grid-cols-[60%_40%] circleLg:pt-[3rem] mini2xl:px-[3rem] 2xl:px-[7rem]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 xlssm:w-[90%] circleLg:items-start circleLg:justify-start circleLg:w-full circleLg:pl-[2rem] circleLg:gap-[5rem]">
          <div className="w-full h-fit flex flex-col items-center gap-2 circleLg:items-start circleLg:pl-2">
            <span className="text-[rgb(10,8,58)] text-2xl font-bold md:text-3xl 2xl:text-4xl block">
              Shopping Cart
            </span>
            <span className="text-sm font-bold text-slate-500 md:text-base 2xl:text-lg">
              Total: 2 items
            </span>
          </div>
          <div className="w-full h-fit py-2  flex flex-col items-center justify-center gap-6 mini2xl:items-start">
            <CartItem />
            <CartItem />
          </div>
          <span className="w-[92%] items-center justify-start poppins font-bold text-lg text-[rgb(10,8,58)] hidden circleLg:flex">
            <IoMdArrowDropleft />
            continue shopping
          </span>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-3 xlssm:w-[90%] self-start md:border border-gray-300 md:py-[2rem] circleLg:justify-self-start ">
          <div className="w-full h-fit grid place-items-center gap-4 border-b border-gray-300 pb-6 mb-6 md:w-[90%] md:grid-cols-2 md:pb-[3rem]">
            <div className="w-full h-full flex md:col-span-2 md:row-start-3">
              <TextField
                label="promo code"
                variant="outlined"
                className="w-[70%] text-white"
                InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
              />
              <button className="button hover:buttonOutline py-1 w-[30%] hover:w-[30%] hover:py-1">
                Apply
              </button>
            </div>
            <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-4xl justify-self-start md:col-span-2 md:row-start-1 md:text-3xl md:justify-self-center">
              Order Summary
            </span>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:col-span-2 md:gap-4">
              <SummaryField label="Total products" value={180} />
              <SummaryField label="Shipping costs" value={25} />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col items-center gap-3 md:w-[90%] md:gap-10">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:gap-4">
              <SummaryField label="Shipment" value={180} />
              <SummaryField label="Applied promo code" value={30} />
              <SummaryField label="Total" value={150} />
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
              <button className="button hover:buttonOutline">
                Proceed to Checkout
              </button>
              <button className="buttonOutline hover:button">
                Member Checkout
              </button>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2 md:items-start">
              <span className="text-[rgb(10,8,58)] text-sm poppins font-bold">
                Accepted payment methods
              </span>
              <div className="w-full h-full flex justify-center items-center gap-4 md:justify-start md:pl-2 md:gap-8">
                {["payment1.png", "payment2.png", "payment3.png"].map(
                  (src, index) => {
                    return (
                      <img
                        src={`/server-assets/${src}`}
                        className={`w-14 h-12 ${index == 0 && "scale-150"} ${
                          index == 1 && "h-5"
                        }`}
                        alt=""
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <span className="w-full flex items-center justify-start poppins font-bold text-sm text-[rgb(10,8,58)] md:w-[90%] md:hidden ">
            <IoMdArrowDropleft />
            continue shopping
          </span>
        </div>
        <span className="w-[92%] items-center justify-start poppins font-bold text-base text-[rgb(10,8,58)] hidden md:flex circleLg:hidden">
          <IoMdArrowDropleft />
          continue shopping
        </span>
      </div>
      <YoumayLikes />
    </div>
  );
};

export default Cart;
