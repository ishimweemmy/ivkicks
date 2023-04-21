import {
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Select,
  FormControl,
  Radio,
} from "@mui/material";
import { useCallback, useState } from "react";
import FOutlinedInput from "../../FormComponents/FOutlinedInput";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const fetchCountries = async () => {
  return new Promise((resolve, reject) => {
    resolve(
      fetch("https://restcountries.com/v3.1/all").then((data) => data.json())
    );
    reject(() => console.log("failed to fetch..."));
  });
};

const Billing = () => {
  const [saveDInfo, setSaveDInfo] = useState(false);
  const [plan, setPlan] = useState<string>("Free");

  const handleSaveDInfo = useCallback(
    () => setSaveDInfo((prev) => !prev),
    [saveDInfo]
  );

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof plan>) => {
      const {
        target: { value },
      } = event;
      setPlan(value);
    },
    [plan]
  );

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 xlssm:w-[90%] xMiniTablet:mt-[5rem] circleLg:gap-8 2xl:-ml-24">
      <div className="w-full h-fit flex flex-col gap-4 border border-gray-200 p-6">
        <FormControl fullWidth>
          <Select
            value={plan}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            className="w-full"
            onChange={handleChange}
          >
            <MenuItem disabled value="choose">
              Choose Option
            </MenuItem>
            {[
              { label: "Free", value: "Free", type: "Standard delivery" },
              {
                label: "Pay $50",
                value: "Pay $50",
                type: "Premium delivery",
              },
            ].map((el, index) => {
              return (
                <MenuItem value={el.label} key={index}>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <Radio checked color="success" />
                      <span>{el.type}</span>
                    </div>
                    <span>{el.label}</span>
                  </div>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FOutlinedInput label="Card number" children={<AiFillLock />} />
        <FOutlinedInput label="Card holder name" />

        <div className="w-full h-fit flex gap-2">
          <FOutlinedInput label="Expiration date (MM/YY)" />
          <FOutlinedInput label="Security Code" />
        </div>
      </div>

      <div className="w-full flex justify-between">
        <span className="w-full flex items-center justify-start poppins font-black text-lg text-[rgb(10,8,58)] md:w-[90%]">
          <IoMdArrowDropleft />
          continue shopping
        </span>
        <button className="button hover:buttonOutline py-1 h-16 hover:py-1">
          Proceed to delivery
        </button>
      </div>
    </div>
  );
};

export default Billing;
