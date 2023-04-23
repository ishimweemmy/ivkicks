import { memo, type FC } from "react";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleModal } from "../../features/modal/modalReducer";

const Search: FC<{ pathname: string }> = ({ pathname }) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  return (
    <div className="w-fit h-fit flex items-center justify-center">
      <FiSearch
        className={`w-[1.3rem] xs:w-[1rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black text-${
          pathname == "/about" || pathname == "/products/promoProducts"
            ? "white"
            : "black"
        }`}
        onClick={() => dispatch(toggleModal(modal))}
      />
    </div>
  );
};

export default memo(Search);
