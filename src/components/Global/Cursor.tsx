import { useEffect, useState } from "react";
import type { FC } from "react";

const Cursor: FC<{ pageOver?: string }> = (props) => {
  const { pageOver } = props;

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [mouseVisible, setMouseVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      setMouseVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    document.addEventListener("mouseleave", () => {
      setMouseVisible(false);
    });

    return () => {
      document.removeEventListener("mousemove", (e: MouseEvent) => {
        setMouseVisible(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
      document.removeEventListener("mouseleave", () => {
        setMouseVisible(false);
      });
    };
  }, [mousePosition, mouseVisible]);

  return (
    <img
      src="/server-assets/customPointer2.png"
      alt=""
      className={`w-12 h-10 z-50 ${
        mouseVisible ? "fixed" : "hidden"
      } pointer-events-none`}
      style={{
        left: `${mousePosition.x - 18}px`,
        top: `${mousePosition.y - 12}px`,
      }}
    />
  );
};

export default Cursor;
