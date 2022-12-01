import type { FC } from "react";
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AutoModeIcon from '@mui/icons-material/AutoMode';

interface PromoProduct {
    sneakerName: string;
    madeOf: string;
    durabilityType: string;
    imgSrc: string
}

const PromoProduct: FC<PromoProduct> = (props) => {
    const { sneakerName, madeOf, durabilityType, imgSrc } = props;
    return <div className="w-full h-full bg-[blue] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-md text-white font-bold">{sneakerName}</span>
            <span className="text-xs text-white flex items-center gap-2"><StackedLineChartIcon className="" fontSize="small" />{madeOf}</span>
            <span className="text-xs text-white flex items-center gap-2"><AutoModeIcon className="" fontSize="small" />{durabilityType} materials</span>
        </div>
        <img src={imgSrc} alt="" />
    </div>
}

export default PromoProduct;