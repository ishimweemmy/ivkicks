import type { FC } from "react";

interface SummaryProps {
  label: string;
  value: number;
}

const SummaryField: FC<SummaryProps> = (props) => {
  const { label, value } = props;
  return (
    <p className="w-full flex justify-between text-sm text-[rgb(10,8,58)] font-semibold">
      <span className="poppins">{label}</span>
      <span className={`poppins `}>${value}</span>
    </p>
  );
};

export default SummaryField;
