import React from "react";
import { Link } from "react-scroll";

interface NavItemProps {
  index: number;
  name: string;
  path: string;
  grayOut: boolean;
  textColour?: string;
  blurOutColour?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  index,
  name,
  path,
  grayOut,
  textColour = "text-white",
  blurOutColour = "text-white/50",
}) => {
  return (
    <div className={`flex flex-col items-end ${grayOut ? blurOutColour : ""}`}>
      <p className={`text-sm ${blurOutColour}`}>0{index}</p>
      <Link
        className={`-mt-2 ${grayOut ? blurOutColour : textColour}`}
        to={path}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        activeClass="active"
      >
        {name}
      </Link>
    </div>
  );
};
