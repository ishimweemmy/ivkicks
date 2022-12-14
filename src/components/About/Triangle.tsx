import type { FC } from "react";
import { colors } from "../../data";

export interface TriangleProps {
  position: { left?: number; bottom?: number; top?: number; right?: number };
  id: number;
  rotation: string;
}

const Triangle: FC<TriangleProps> = (props) => {
  const { position, id, rotation } = props;

  const styles = {
    background: `linear-gradient(270deg, ${colors[id].firstColor} 0%, ${colors[id].secondColor} 100%)`,
  };

  return (
    <div
      className={`w-[1.5rem] h-[1.5rem] absolute rounded-br-full z-0`}
      style={{
        ...styles,
        transform: `rotateZ(${rotation}deg)`,
        left: `${position.left}`,
        right: `${position.right}rem`,
        bottom: `${position.bottom}rem`,
        top: `${position.top}rem`,
      }}
    ></div>
  );
};

export default Triangle;
