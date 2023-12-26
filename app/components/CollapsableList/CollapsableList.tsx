import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function CollapsibleList({
  punchLine,
  details,
}: CollapsableListProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        pl: "24px",
      }}
    >
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          "--joy-palette-primary-plainColor": "#8a4baf",
          "--joy-palette-neutral-plainHoverBg": "transparent",
          "--joy-palette-neutral-plainActiveBg": "transparent",
          "--joy-palette-primary-plainHoverBg": "transparent",
          "--joy-palette-primary-plainActiveBg": "transparent",
          [theme.getColorSchemeSelector("dark")]: {
            "--joy-palette-text-secondary": "#635e69",
            "--joy-palette-primary-plainColor": "#d48cff",
          },

          "--List-insetStart": "32px",
          "--ListItem-paddingY": "0px",
          "--ListItem-paddingRight": "16px",
          "--ListItem-paddingLeft": "21px",
          "--ListItem-startActionWidth": "0px",
          "--ListItem-startActionTranslateX": "-50%",

          [`& .${listItemButtonClasses.root}`]: {
            borderLeftColor: "divider",
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
            {
              borderLeftColor: "currentColor",
            },
          '& [class*="startAction"]': {
            color: "var(--joy-palette-text-tertiary)",
          },
        })}
      >
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? "initial" : "rotate(-90deg)" }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? "bold" : undefined,
                color: open ? "text.primary" : "inherit",
              }}
            >
              {punchLine}
            </Typography>
          </ListItem>
          {open && (
            <List sx={{ "--ListItem-paddingY": "8px" }}>
              {details.map((detail, key) => (
                <ListItem key={key}>
                  <ListItemButton>{detail}</ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );
}

type CollapsableListProps = {
  punchLine: string;
  details: string[];
};
