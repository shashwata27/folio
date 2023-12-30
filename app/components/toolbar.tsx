import { NotificationsRounded } from "@mui/icons-material";
import { Box, BoxProps, Button, IconButton } from "@mui/joy";
import { Fragment, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCurrentUser } from "../core/auth";
import { ColorSchemeButton } from "./button-color-scheme";
import { UserAvatarButton } from "./button-user-avatar";
import DropDownButton from "./DropDownButton/DropDownButton";

export type TPageSectionLinks = {
  [innerKey: string]: string;
};
type TRouteLinks = {
  [outerKey: string]: TPageSectionLinks;
};

export function Toolbar(props: ToolbarProps): JSX.Element {
  const { sx, ...other } = props;
  const dropDownButtonLinks: TRouteLinks = {
    "/introduction": {},
    "/experience": {
      Thoughtworks: "#thoughtworks",
      Cognizant: "#cognizant",
      Nicheslov: "#nichesolv",
      ZeroDollarSecurity: "#zerodollarsecurity",
    },
    "/education": {},
  };
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        gap: 1,
        px: 2,
        ...sx,
      }}
      component="header"
      {...other}
    >
      <DropDownButton
        title={pathname}
        routeLinks={dropDownButtonLinks[pathname]}
      />

      <Box sx={{ flexGrow: 1 }} component="span" />

      <Suspense>
        <ActionButtons />
      </Suspense>
    </Box>
  );
}

function ActionButtons(): JSX.Element {
  const user = useCurrentUser();

  return (
    <Fragment>
      <ColorSchemeButton variant="soft" size="sm" />

      <IconButton variant="soft" size="sm">
        <NotificationsRounded />
      </IconButton>

      {user ? (
        <UserAvatarButton variant="soft" />
      ) : (
        <Button component={Link} size="sm" to="/login">
          Sign In
        </Button>
      )}
    </Fragment>
  );
}

type ToolbarProps = Omit<BoxProps<"header">, "children">;
