import { TextField } from "@mui/material";
import type { FC } from "react";

const FTextField: FC<FTextField> = (props) => {
  const { label, variant } = props;

  return (
    <TextField
      label={label}
      variant={variant || "outlined"}
      className="w-full text-white"
      InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
    />
  );
};

export default FTextField;
