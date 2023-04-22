import { AiFillLock, AiOutlineCalendar } from "react-icons/ai";
import FOutlinedInput from "../../components/FormComponents/FOutlinedInput";
import { BiUserCheck } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import VisitorAPI from "visitorapi";
import Calendar from "../../components/Auth/Calendar";

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

const SignUp = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any>([]);
  const [sendSUpdates, setSendSUpdates] = useState(false);

  useEffect(() => {
    fetchCountries().then((res) => setCountries(res));
    VisitorAPI("OH1CA2yn2CodfSiBnRIo", (data: any) => {
      setCountry(data.countryName);
    });
  }, []);

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof country>) => {
      const {
        target: { value },
      } = event;
      setCountry(value);
    },
    [country]
  );

  const handleSendSUpdates = () => setSendSUpdates((prev) => !prev);

  return (
    <div className="w-full h-fit grid gap-4 bg-white md:grid-cols-2 miniLarge:gap-8 miniLarge:pl-8 2xl:gap-24 2xl:pl-20">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4 px-4 lsm:px-8 miniLarge:gap-8">
        <h1 className="text-2xl font-bold text-center text-[#0A083A] lsm:text-3xl md:text-2xl">
          create your Kicks account
        </h1>
        <p className="text-base">
          Already have an account? <span className="text-[#315BFF]">Login</span>
        </p>
        <div className="w-full flex flex-col gap-4">
          <FOutlinedInput label="Full name" children={<BiUserCheck />} />
          <FOutlinedInput label="Email" children={<MdAlternateEmail />} />
          <FOutlinedInput label="Password" children={<AiFillLock />} />
          <div className="w-full flex flex-col gap-2">
            <Calendar label="Date of birth" />
            <span className="text-gray-400 text-sm">
              Get a yearly discount on your Birthday.
            </span>
          </div>
          <FormControl fullWidth className="tableLr:col-span-2">
            <Select
              value={country}
              onChange={handleChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
            >
              <MenuItem disabled>Country</MenuItem>
              {countries?.map((cname: any) => (
                <MenuItem
                  key={cname.name.common}
                  value={cname.name.common}
                  className="w-full flex justify-center items-center gap-4"
                >
                  <span className="w-fit text-white">{cname.flag}</span>
                  <span className="w-fit text-black">{cname.name.common}</span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="w-full h-fit flex gap-2">
            <FOutlinedInput label="Male" />
            <FOutlinedInput label="Female" />
          </div>
        </div>
        <FormControlLabel
          label="Sign up for emails to get updates from Shop, on products, benefits and offers."
          className="w-full"
          control={
            <Checkbox
              checked={sendSUpdates}
              color="primary"
              size="small"
              onChange={handleSendSUpdates}
            />
          }
        />
        <span className="text-sm">
          By creating an account, you agree to kick's{" "}
          <b className="text-[#0A083A]">Privay policy</b> and{" "}
          <b className="text-[#0A083A]">Terms of Use</b>
        </span>
        <button className="button bg-[#315BFF] hover:border-[#315BFF] hover:text-[#315BFF] hover:buttonOutline">
          Join Us
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#DAE7F7]">
        <div className="w-full h-fit grid place-items-center relative">
          <img
            src="/server-assets/backDecor.svg"
            alt=""
            className="rotate-[110deg] miniLarge:scale-[1.3]"
          />
          <img
            src="/server-assets/authBg.png"
            alt=""
            className="absolute w-[20rem] h-[15rem] miniLarge:scale-[1.2] animate-pulse"
          />
          <img
            src="/server-assets/authBg1.png"
            alt=""
            className="absolute w-[8rem] h-[10rem] left-4 bottom-[2rem] miniLarge:scale-[1.2] miniLarge:left-10"
          />
          <img
            src="/server-assets/authBg7.png"
            alt=""
            className="absolute w-[7rem] h-[10rem] right-9 bottom-[2rem] rotate-[25deg] miniLarge:scale-[1.2] miniLarge:right-16"
          />
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-3">
          <span className="text-lg text-[#315BFF] font-bold">
            Best Sneakers store brought to you.
          </span>
          <span className="text-xs text-gray-500 text-center font-bold px-6 ">
            Stop wasting time going on the market looking for what you don't
            know. Here is the solution!!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
