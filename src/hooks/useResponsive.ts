import { useEffect, useMemo, useState } from "react";

export const useResponsive = () => {
  const [tablet, setTablet] = useState(window.innerWidth >= 550);
  const [desktop, setDesktop] = useState(window.innerWidth <= 1024);
  const [miniLaptop, setMiniLaptop] = useState(window.innerWidth >= 900);
  const [laptop, setLaptop] = useState(window.innerWidth >= 1500);
  const [mobile, setMobile] = useState(window.innerWidth >= 768);
  const [smallMobile, setSmallMobile] = useState(window.innerWidth >= 500);
  const [catMiniLaptop, setCatMiniLaptop] = useState(window.innerWidth >= 1200);
  const [newArrMobile, setNewArrMobile] = useState(window.innerWidth <= 800);
  const [largeTablet, setLargeTablet] = useState(window.innerWidth <= 699);

  const resizeDetect = () => {
    setTablet(window.innerWidth >= 550);
    setMiniLaptop(window.innerWidth >= 900);
    setLaptop(window.innerWidth >= 1500);
    setMobile(window.innerWidth >= 768);
    setSmallMobile(window.innerWidth >= 500);
    setCatMiniLaptop(window.innerWidth >= 1200);
    setDesktop(window.innerWidth <= 1024);
    setNewArrMobile(window.innerWidth <= 800);
    setLargeTablet(window.innerWidth <= 699);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeDetect);
    return () => window.removeEventListener("resize", resizeDetect);
  }, [
    tablet,
    miniLaptop,
    catMiniLaptop,
    laptop,
    mobile,
    smallMobile,
    desktop,
    newArrMobile,
    largeTablet,
  ]);

  return useMemo(() => {
    return [
      tablet,
      miniLaptop,
      laptop,
      mobile,
      smallMobile,
      catMiniLaptop,
      desktop,
      newArrMobile,
      largeTablet,
    ];
  }, [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ]);
};
