import { memo, useEffect, useState } from "react";
import type { FC } from "react";
import { useResponsive } from "../../hooks/useResponsive";

const Cursor: FC<CursorProps> = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });

  const [mouseVisible, setMouseVisible] = useState(true);

  const [mobile] = useResponsive();

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMouseVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseLeaveHandler = (e: MouseEvent) => {
      setMouseVisible(false);
      setMousePosition({ x: e.clientX, y: e.clientY });
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
        mouseVisible && mobile ? "fixed" : "hidden"
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
