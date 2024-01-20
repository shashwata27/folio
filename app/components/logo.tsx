import { LunchDining } from "@mui/icons-material";
import burgerIcon from "../public/burgerIcon.png";
import { Box, BoxProps, IconButton, Typography } from "@mui/joy";
import { useState } from "react";

export function Logo(props: LogoProps): JSX.Element {
  const { sx, openSidebar, setOpenSidebar, ...other } = props;
  const [burgerLoaded, setBurgerLoaded] = useState(false);
  return (
    <Box
      sx={{
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
      {...other}
    >
      <IconButton
        color="primary"
        variant="soft"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <img
          src={burgerIcon}
          style={{ height: "30px", width: "30px" }}
          alt="burger-icon"
          onLoad={() => setBurgerLoaded(true)}
        />
        {burgerLoaded ? null : <LunchDining />}
      </IconButton>
      {openSidebar ? (
        <Typography sx={{ fontSize: "1.25rem" }} level="h4" component="div">
          {import.meta.env.VITE_APP_NAME}
        </Typography>
      ) : null}
    </Box>
  );
}

export type LogoProps = {
  sx: Omit<BoxProps, "children">;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
