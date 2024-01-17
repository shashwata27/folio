import { Box, BoxProps } from "@mui/joy";
import { Fragment, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { ColorSchemeButton } from "./button-color-scheme";
import DropDownButton from "./DropDownButton/DropDownButton";

export type TPageSectionLinks = {
  [innerKey: string]: string;
};
type TRouteLinks = {
  [outerKey: string]: TPageSectionLinks | null;
};

export function Toolbar(props: ToolbarProps): JSX.Element {
  const { sx, ...other } = props;
  const dropDownButtonLinks: TRouteLinks = {
    "/introduction": null,
    "/experience": {
      Thoughtworks: "#thoughtworks",
      Cognizant: "#cognizant",
      Nicheslov: "#nichesolv",
      ZeroDollarSecurity: "#zerodollarsecurity",
    },
    "/education": {
      RCCIIT: "#rcciit",
      BidhanNagarMunicipalHighSchool: "#bidhannagarmunicipalhighschool",
      BidhanNagarMunicipalSchool: "#bidhannagarmunicipalschool",
    },
    "/skills-and-certificates": {
      Skills: "#skills",
      Certificates: "#certificates",
    },
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
  return (
    <Fragment>
      <ColorSchemeButton variant="soft" size="sm" />
    </Fragment>
  );
}

type ToolbarProps = Omit<BoxProps<"header">, "children">;
