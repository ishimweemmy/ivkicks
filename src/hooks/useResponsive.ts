import { useEffect, useState } from "react";

const useResponsive = (width: boolean) => {
  const [widthSize, setWidthSize] = useState(width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthSize(width);
    });
  }, [widthSize]);

  return widthSize;
};

export default useResponsive;
