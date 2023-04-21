import { InputAdornment, OutlinedInput } from "@mui/material";
import type { FC } from "react";
import { FTextFieldProps } from "../../@types";

const FOutlinedInput: FC<FTextFieldProps> = (props) => {
  const { label, children } = props;

  return (
    <OutlinedInput
      fullWidth
      placeholder={label}
      className="w-full text-white"
      endAdornment={<InputAdornment position="end">{children}</InputAdornment>}
    />
  );
};

export default FOutlinedInput;
