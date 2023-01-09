import type { FC } from "react";
import { memo } from "react";

interface TrackerCard {
  id: number;
  measurement: string;
  imgSrc: string;
}
const TrackerCard: FC<TrackerCard> = (props) => {
  const { id, measurement, imgSrc } = props;
  return (
    <div className="w-[40%] h-[3rem] flex-col items-center gap-0 hidden lgMd:flex">
      <img src={imgSrc} alt="" className="w-8 h-8" />
      <span className="text-xs font-bold">{measurement}</span>
      <span className="text-xs">{id == 0 ? "Burned" : "Distance"}</span>
    </div>
  );
};

export default memo(TrackerCard);
