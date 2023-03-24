import { TextField } from "@mui/material"
import type { FC } from 'react'

interface FTextField {
    label: string,
    variant?: string,
    type?: string
}

const FTextField: FC<FTextField> = (props) => {
    const { label, variant } = props;

    return (
        <TextField
            label={label}
            variant={"outlined" || variant}
            className="w-full text-white"
            InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
        />
    );
}

export default FTextField;