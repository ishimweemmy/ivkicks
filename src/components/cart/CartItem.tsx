import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import Incrementor from "../Global/Incrementor";

interface CartItem {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  size: number;
  price: number;
  quantity: number;
}

const CartItem = () => {
  const [nbrOfShoes, setNbrOfShoes] = useState("");
  const handleSelectionChange = (event: SelectChangeEvent) => {
    setNbrOfShoes(event.target.value as string);
  };
  const [nbrOfProducts, setNbrOfProducts] = useState(1);

  return (
    <div className="w-full h-[8rem] bg-white flex items-center justify-center gap-2 md:h-full md:gap-8">
      <div
        className="w-[35%] h-full bg-cover bg-no-repeat md:w-[25%] md:h-[12rem]"
        style={{ backgroundImage: `url('/server-assets/thelook2.jpg')` }}
      ></div>
      <div className="w-[75%] h-fit flex flex-col items-start justify-center gap-1 md:gap-2">
        <div className="w-full h-fit flex justify-between items-center minSm:w-[80%]">
          <span className="text-base text-[rgb(10,8,58)] font-bold md:text-xl">
            Nike competition shoes
          </span>
          <ImCross className="text-[#FF3C78]  text-xs font-normal md:hidden" />
          <span className="text-xl text-[rgb(10,8,58)] font-bold hidden md:block">
            $ 120
          </span>
        </div>
        <span className="text-sm text-gray-500 font-bold poppins">
          Men's Footwear
        </span>
        <span className="text-sm text-gray-500 font-bold poppins">
          size: <b className="text-[rgb(10,8,58)]">9</b>
        </span>
        <div className="w-full h-fit flex justify-between items-center">
          <span className="text-xl text-[rgb(10,8,58)] font-bold md:hidden">
            $ 120
          </span>
          <span className="text-sm text-gray-500 font-bold poppins hidden md:block">
            Estimated delivery date:{" "}
            <b className="text-[rgb(10,8,58)]">12-16 April</b>
          </span>
          <div className="w-[40%] h-fit flex items-center gap-3 md:hidden">
            <span className="text-sm text-[rgb(10,8,58)] font-bold">Qty</span>
            <FormControl className="h-fit" size="small">
              <Select
                value={nbrOfShoes}
                label="size"
                onChange={handleSelectionChange}
                sx={{ maxHeight: 30 }}
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
          </div>
        </div>
        <div className="w-[80%] h-[3rem] hidden justify-between items-center mt-[1rem] md:flex">
          <Incrementor />
          <span className="text-[#FF3C78] text-sm font-bold">Delete</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
