import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TPageSectionLinks } from "../toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DropDownButton({
  title,
  routeLinks,
}: DropDownButtonProps) {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    setSelectedOption(hash);
  }, [hash]);
  return (
    <Select
      placeholder={`Select a ${title} section..`}
      disabled={!routeLinks}
      indicator={<KeyboardArrowDown />}
      value={selectedOption}
      sx={{
        width: 300,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {routeLinks
        ? Object.entries(routeLinks).map(([nameKey, linkValue]) => (
            <Option
              key={`${nameKey}`}
              value={linkValue}
              onClick={() => {
                navigate(`${title}${linkValue}`);
              }}
            >
              {nameKey}
            </Option>
          ))
        : null}
    </Select>
  );
}

type DropDownButtonProps = {
  title: string;
  routeLinks: TPageSectionLinks | null;
};
