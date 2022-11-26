import React, { useEffect, useState } from "react";
import { Tablet, Twitter } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import Social, { SocialProps } from "./Social";
import type { FC } from "react";

const Socials: FC<{ section?: string }> = (props) => {
  const { section } = props;
  const [tablet, setTablet] = useState(window.innerWidth > 768 ? true : false);
  const [mobile, setMobile] = useState(window.innerWidth < 768 ? true : false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTablet(window.innerWidth > 768 ? true : false);
      setMobile(window.innerWidth < 768 ? true : false);
    });
  }, [tablet, mobile]);

  const socialsData: SocialProps[] = [
    {
      name: "twitter",
      link: "https://twitter.com",
      icon: (
        <Twitter
          fontSize={section == "footer" ? `medium` : "small"}
          className={`text-[${
            section == "footer" ? "#FF3C78" : "#315BFF"
          }] cursor-pointer`}
        />
      ),
    },
    {
      name: "facebook",
      link: "https://facebook.com",
      icon: (
        <FacebookRounded
          fontSize={section == "footer" ? `medium` : "small"}
          className={`text-[${
            section == "footer" ? "#FF3C78" : "#315BFF"
          }] cursor-pointer`}
        />
      ),
    },
    {
      name: "instagram",
      link: "https://instagram.com",
      icon: (
        <Instagram
          fontSize={section == "footer" ? `medium` : "small"}
          className={`text-[${
            section == "footer" ? "#FF3C78" : "#315BFF"
          }] cursor-pointer`}
        />
      ),
    },
  ];

  const socials = socialsData.map((socialData) => {
    const { link, name, icon } = socialData;
    return (
      <Social
        key={link}
        link={link}
        name={name}
        icon={icon}
        section={section}
      />
    );
  });
  return (
    <div
      className="w-full h-[20%] flex items-center justify-center gap-3"
      style={{
        justifyContent: `${
          section == "subscriptions" && tablet
            ? "flex-end"
            : section == "footer" && !mobile
            ? "flex-start"
            : "center"
        }`,
        paddingRight: `${section == "subscriptions" && tablet ? "2rem" : "0"}`,
        alignItems: `${
          section == "subscriptions" && tablet ? "flex-end" : "center"
        }`,
      }}
    >
      {socials}
    </div>
  );
};

export default Socials;
