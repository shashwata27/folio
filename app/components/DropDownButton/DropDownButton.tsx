import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TPageSectionLinks } from "../toolbar";
import { useNavigate } from "react-router-dom";

export default function DropDownButton({
  title,
  routeLinks,
}: DropDownButtonProps) {
  const navigate = useNavigate();
  return (
    <Select
      placeholder={`Select a ${title} section..`}
      disabled={!routeLinks}
      indicator={<KeyboardArrowDown />}
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
