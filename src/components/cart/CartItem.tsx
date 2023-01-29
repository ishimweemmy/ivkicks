import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ImCross } from "react-icons/im";

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

  return (
    <div className="w-full h-[8rem] bg-white flex items-center gap-2">
      <div
        className="w-[35%] h-[90%] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/server-assets/thelook2.jpg')` }}
      ></div>
      <div className="w-[75%] h-fit flex flex-col items-start justify-center gap-1">
        <div className="w-full h-fit flex justify-between items-center">
          <span className="text-base text-[rgb(10,8,58)] font-bold">
            Nike competition shoes
          </span>
          <ImCross className="text-[#FF3C78]  text-xs font-normal" />
        </div>
        <span className="text-sm text-gray-500 font-bold poppins">
          Men's Footwear
        </span>
        <span className="text-sm text-gray-500 font-bold poppins">
          size: <b className="text-[rgb(10,8,58)]">9</b>
        </span>
        <div className="w-full h-fit flex justify-between items-center">
          <span className="text-xl text-[rgb(10,8,58)] font-bold">$ 120</span>
          <div className="w-[40%] h-fit flex items-center gap-3">
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
      </div>
    </div>
  );
};

export default CartItem;
