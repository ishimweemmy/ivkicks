import type { FC } from "react"

interface DiffProps {
    heading: string,
    content: string,
    imgUrl: string
}
const DiffCard: FC<DiffProps> = (props) => {
    const { heading, content, imgUrl } = props;
    return (
        <div className="w-full h-fit bg-white flex flex-col items-center justify-center gap-[1rem] p-[2rem] hover:bg-[#315bff] border ">
            <img src={imgUrl} alt="" className="w-16 h-16" />
            <span>{heading}</span>
            <p className="text-center">{content}</p>
        </div>
    )
}

export default DiffCard