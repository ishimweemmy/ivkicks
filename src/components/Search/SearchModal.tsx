import { Modal, useMantineTheme } from "@mantine/core";
import { useState, type ChangeEvent, type FC, memo } from "react";
import FOutlinedInput from "../FormComponents/FOutlinedInput";
import { FiSearch } from "react-icons/fi";

const SearchModal: FC<SearchModalProps> = (props) => {
  const theme = useMantineTheme();
  const { opened, close } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleChange = async (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      closeOnClickOutside
      closeOnEscape
      closeButtonProps={{
        disabled: true,
        children: (
          <h1 className="w-full h-full bg-white rounded-md border-white"></h1>
        ),
      }}
    >
      <FOutlinedInput
        label=""
        children={
          <FiSearch
            className={`w-[1.3rem] xs:w-[1rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black`}
          />
        }
        _onChange={handleChange}
      />
      {searchValue && (
        <div className="w-full h-fit grid gap-4 mt-[2rem]">
          <div className="w-full h-[6rem] flex gap-3">
            <img src="/server-assets/nikeShoes.jpg" alt="" className="w-[30%] h-full rounded-md" />
            <div className="w-full flex flex-col items-start justify-center gap-1">
              <span className="text-gray-400 font-bold text-sm">Men Running</span>
              <span className="text-[#0A083A] text-base font-bold">Nike Running Shoes</span>
              <span className="text-[#FF3C78] text-base font-bold">$340</span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default memo(SearchModal);
