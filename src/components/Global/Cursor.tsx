import { memo, useEffect, useState } from "react";
import type { FC } from "react";

const Cursor: FC<{ pageOver?: string }> = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const [mouseVisible, setMouseVisible] = useState(true);

  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMouseVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseLeaveHandler = () => {
      setMouseVisible(false);
    };
    document.addEventListener("mouseleave", mouseLeaveHandler);

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return (
    <img
      src="/server-assets/custompointer.png"
      alt=""
      className={`w-14 h-12 z-[19999]  ${
        mouseVisible && !mobile ? "fixed" : "hidden"
      } pointer-events-none`}
      style={{
        left: `${mousePosition.x - 25}px`,
        top: `${mousePosition.y - 14}px`,
        WebkitUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
    />
  );
};

export default memo(Cursor);
