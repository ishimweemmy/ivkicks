import type { FC } from "react";
import { memo } from "react";

export interface SocialProps {
  name: string;
  link: string;
  icon: any;
  section?: string;
}

const Social: FC<SocialProps> = (props) => {
  const { icon, section, ...others } = props;
  return (
    <>
      {section == "footer" ? (
        <div className="">{icon}</div>
      ) : (
        <div className="w-[2.5rem] h-[2.5rem] bg-white rounded-full grid place-items-center ">
          {icon}
        </div>
      )}
    </>
  );
};

export default memo(Social);
