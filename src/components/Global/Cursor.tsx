import { memo, useEffect, useState } from "react";
import type { FC } from "react";

const Cursor: FC<{ pageOver?: string }> = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [mouseVisible, setMouseVisible] = useState(true);

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
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return (
    <img
      src="/server-assets/custompointer.png"
      alt=""
      className={`w-14 h-12 z-[19999]  ${
        mouseVisible ? "fixed" : "hidden"
      } pointer-events-none`}
      style={{
        left: `${mousePosition.x - 25}px`,
        top: `${mousePosition.y - 14}px`,
      }}
    />
  );
};

export default memo(Cursor);
