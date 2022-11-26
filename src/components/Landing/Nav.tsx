import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Logo.svg";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import menu from "../../assets/hamburger icon.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import type { FC } from "react";
import { FiMenu } from "react-icons/fi";

interface Link {
  to: string;
  end: boolean;
  displayName: string;
}

interface NavProps {
  page?: string;
}

const Nav: FC<NavProps> = (props) => {
  const links: Link[] = [
    {
      to: "/",
      end: true,
      displayName: "Footwear",
    },
    {
      to: "/about",
      end: false,
      displayName: "About us",
    },
    {
      to: "/products",
      end: true,
      displayName: "Products",
    },
    {
      to: "/sale",
      end: true,
      displayName: "Sale",
    },
  ];

  const homeLinkRef = useRef<HTMLAnchorElement>(null);

  const [isDisplayed, setIsDisplayed] = useState<Boolean>(false);
  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <nav
      className={`w-auto h-[6rem] sm:px-4 bg-[${
        location.pathname == "/about" ? "rgb(10,8,58)" : "#F5F5F5"
      }] flex items-center justify-around px-[7rem] gap-[12rem] lg:gap-[4rem] lg:px-[2rem] xl:px-[2rem] md:justify-between md:px-8 lsm:gap-[25rem] xMiniTablet:gap-[30rem] miniTablet:px-4 transition-all overflow-hidden z-30 lssm:justify-between lssm:px-4 sm:gap-0 xl:ml-[5rem] xs:gap-2 xs:p-0 xs:pl-4 xs:justify-between duration-700`}
      id="top"
    >
      <img
        src={logo}
        alt="logo"
        className="w-[2rem] lg:w-[3rem] transition-all cursor-pointer xs:w-[1.5rem]"
        onClick={() => homeLinkRef.current?.click()}
      />
      <div className="hidden lg:flex lg:h-[5rem] flex-grow items-center justify-center gap-[5rem] transition-all self-end">
        {links.map((link) => {
          return (
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                isActive
                  ? `text-lg font-medium text-[#FF3C78] grid grid-cols-1 justify-items-center whitespace-nowrap after:w-[.5rem] after:h-[.5rem] after:rounded-full after:bg-[#FF3C78] transition-all duration-700 after:animate-ping `
                  : `text-lg font-medium text-${location.pathname == "/about" ? "white" : "[#0A083A]"} grid grid-cols-1 justify-items-center whitespace-nowrap after:w-[.5rem] after:h-[.5rem] transition-all duration-1000`
              }
              ref={link.to === "/" ? homeLinkRef : null}
              key={link.to}
            >
              {link.displayName}
            </NavLink>
          );
        })}
      </div>
      <div className="min-w-[10rem] lg:w-[20rem] h-[4rem] sm:min-w-[8rem] xs:gap-6 bg-[bue] bg-blue] flex items-center justify-center gap-8 lg:gap-[3rem] sm:gap-8 transition-all">
        <FiSearch
          className={`w-[1.3rem] xs:w-[1rem] lg:w-[2rem] miniTablet:w-[3rem] miniTablet:h-[1.5rem] lg:h-[1.5rem] h-[1.3rem] sm:w-[1rem] block md:hidden lg:block font-black text-${
            location.pathname == "/about" && "white"
          }`}
        />
        <FiUser className={`w-[1.5rem] h-[1.5rem] hidden lg:block text-${location.pathname == "/about" && "white"}`} />

        <Link to="/cart" className="w-fit h-fit relative md:hidden lg:block">
          <FiShoppingBag
            className={`w-[1.5rem] xs:w-[1rem] sm:w-[1rem] miniTablet:w-[1.75rem] lg:w-[2rem] h-[1.5rem] font-bold text-${
              location.pathname == "/about" && "white"
            }`}
          />
          <span className="absolute bg-[#FF3C78] w-[1.2rem] xs:w-[1rem] xs:h-[1rem] xs:text-xs xs:font-semibold sm:w-[.9rem] sm:h-[.9rem] lg:w-[1rem] lg:h-[1rem] h-[1.2rem] sm:text-xs rounded-full grid place-content-center text-white right-[-.5rem] miniTablet:right-[-.3rem]  lg:right-[-.3rem] top-[.75rem]">
            3
          </span>
        </Link>
        {location.pathname != "/about" ? (
          <img
            src={menu}
            alt=""
            className="sm:w-[1rem] xs:w-[.75rem] lg:hidden miniTablet:w-[2rem] cursor-pointer"
            onClick={() => setIsDisplayed((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="text-white text-2xl lg:hidden"
            onClick={() => setIsDisplayed((prev) => !prev)}
          />
        )}
      </div>
      <div
        className={`${
          !isDisplayed
            ? "animate-nav-hide h-0 md:h-0 miniTablet:h-0 md:animate-nav-display-hide miniTablet:animate-nav-display-hide"
            : "h-[8rem] md:h-[10rem]"
        } lg:hidden bg-white w-[10rem] xs:w-[8rem] md:w-[12rem] miniTablet:w-[15rem] absolute top-[4.5rem] right-3 miniTablet:right-[7rem] sm:right-[1rem] flex flex-col justify-center transition-all duration-300 overflow-hidden gap-2`}
        style={{ boxShadow: "#d3d3d3 0px 2px 20px 0px" }}
      >
        {links.map((link) => {
          return (
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                isActive
                  ? `w-full font-normal text-sm md:text-[1rem] text-[#0A083A] flex flex-col items-start whitespace-nowrap after:w-[.3rem] after:h-[.3rem] after:ml-3 after:rounded-full after:bg-[#FF3C78] after:transition-all after:duration-1000 transition-all duration-1000 after:animate-pulse pl-8 hover:pl-10 `
                  : `w-full font-normal text-sm md:text-[1rem] text-[#0A083A] flex flex-col items-start whitespace-nowrap after:w-[.3rem] after:h-[.3rem] transition-all duration-1000 pl-8 hover:pl-10 `
              }
              key={link.to}
              onClick={() => setIsDisplayed(false)}
            >
              {link.displayName}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
