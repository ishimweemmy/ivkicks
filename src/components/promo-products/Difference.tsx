import { differenceData } from "../../data";
import DiffCard from "./DiffCard";

const Difference = () => {
    return (
        <div className="w-full h-full py-4 flex flex-col items-center justify-center bg-white">
            <div className="w-full h-fit flex flex-col gap-[1rem] p-[3rem]">
                <span className="text-center text-xs text-[#FF3C78] uppercase font-bold block">Benefits</span>
                <h1 className="text-center text-2xl text-[#0A083A] flex flex-col  font-bold">
                    <span>Why we are </span>
                    <span>different</span>
                </h1>
            </div>
            <div className="w-full h-fit flex flex-wrap">
                {differenceData.map(data => {
                    const { heading, content, imgUrl } = data;
                    return <DiffCard heading={heading} content={content} imgUrl={imgUrl} />
                })}
            </div>
        </div>
    )
}

export default Difference;