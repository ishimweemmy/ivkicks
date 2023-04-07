import { useEffect, useMemo, useState } from "react";

export const useResponsive = () => {
  const [tablet, setTablet] = useState(window.innerWidth >= 550);
  const [miniLaptop, setMiniLaptop] = useState(window.innerWidth >= 900);
  const [laptop, setLaptop] = useState(window.innerWidth >= 1500);
  const [mobile, setMobile] = useState(window.innerWidth >= 768);

  const resizeDetect = () => {
    setTablet(window.innerWidth >= 550);
    setMiniLaptop(window.innerWidth >= 900);
    setLaptop(window.innerWidth >= 1500);
    setMobile(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeDetect);
    return () => window.removeEventListener("resize", resizeDetect);
  }, [tablet, miniLaptop, laptop, mobile]);

  return useMemo(() => {
    return [tablet, miniLaptop, laptop, mobile];
  }, [tablet, miniLaptop, laptop, mobile]);
};
