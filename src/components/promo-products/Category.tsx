import type { FC } from "react";
import { FiExternalLink } from "react-icons/fi";

interface CategoryProps {
  url: string;
  img: string;
  name: string;
  id: number
}

const Category: FC<CategoryProps> = (props) => {
  const { url, img, name, id } = props;


  const visitCollection = () => {
    window.open(url);
  };
  return (
    <div
      className={`w-full h-full bg-no-repeat bg-cover flex items-end justify-center pb-[1rem] group transition duration-300 ${id == 1 ? "md:col-span-2" : id == 4 ? "md:col-span-2" : ""}`}
      style={{ backgroundImage: `url(${img})`, backgroundPosition: `center` }}
    >
      <div className="w-[60%] backdrop-blur-xl p-4 rounded-md text-xs font-bold flex items-center justify-center gap-4 group-hover:scale-[1.1] transition duration-300">
        <span className="whitespace-nowrap">{name} shoes </span>
        <FiExternalLink onClick={visitCollection} />
      </div>
    </div>
  );
};

export default Category;