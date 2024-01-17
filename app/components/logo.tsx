import { BrightnessAutoRounded } from "@mui/icons-material";
import { Box, BoxProps, IconButton, Typography } from "@mui/joy";

export function Logo(props: LogoProps): JSX.Element {
  const { sx, openSidebar, setOpenSidebar, ...other } = props;
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
        <BrightnessAutoRounded />
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
