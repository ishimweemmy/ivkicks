import { useEffect, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface Link {
  link: string;
  to: string;
}

export interface AccordionProps {
  summary: string;
  links: Link[];
  isActive: boolean;
  handleChange: (summary: string) => any;
}

const Accordion: FC<AccordionProps> = (props) => {
  const { summary, links: allLinks, isActive, handleChange } = props;
  const [tablet, setTablet] = useState(window.innerWidth >= 768 ? true : false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTablet(window.innerWidth >= 768 ? true : false);
    });
  }, [tablet]);

  const links = allLinks.map((linkData: Link, index: number) => {
    const { link, to } = linkData;
    return (
      <Link to={`/${to}`} key={index} className="text-sm md:text-base">
        {link}
      </Link>
    );
  });
  return (
    <div className="w-full h-full flex flex-col items-start justify-center pl-[30%] gap-4 transition-all duration-1000 md:pl-0 md:justify-start md:pt-[2rem]">
      <span
        className="text-lg font-medium text-[#0A083A] cursor-pointer transition-all duration-700 lg:text-2xl md:font-semibold whitespace-nowrap"
        onClick={() => handleChange(summary)}
      >
        {summary}
      </span>
      <div
        className="flex flex-col items-start justify-start transition-all duration-1000"
        style={{ display: `${isActive || tablet ? "flex" : "none"}` }}
      >
        {links}
      </div>
    </div>
  );
};

export default Accordion;
