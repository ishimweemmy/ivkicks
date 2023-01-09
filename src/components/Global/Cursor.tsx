import { memo, useEffect, useState } from "react";
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
      const elementStyles = document
        .elementFromPoint(e.clientX, e.clientY)
        ?.attributes.getNamedItem("class")
        ?.textContent?.split(" ");
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
