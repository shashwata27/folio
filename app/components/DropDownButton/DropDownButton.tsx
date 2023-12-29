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
      {Object.entries(routeLinks).map(([nameKey, linkValue]) => (
        <Option
          key={`${nameKey}`}
          value={linkValue}
          onClick={() => {
            navigate(`${title}${linkValue}`);
          }}
        >
          {nameKey}
        </Option>
      ))}
    </Select>
  );
}

type DropDownButtonProps = { title: string; routeLinks: TPageSectionLinks };
