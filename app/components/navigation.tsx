import {
  AssignmentInd,
  WorkHistory,
  SchoolRounded,
  WorkspacePremium,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListProps,
} from "@mui/joy";
import { ReactNode, memo } from "react";
import { Link, useMatch } from "react-router-dom";

export const Navigation = memo(function Navigation(
  props: NavigationProps,
): JSX.Element {
  const { sx, openSidebar, ...other } = props;

  return (
    <List
      sx={{ "--ListItem-radius": "4px", ...sx }}
      size="sm"
      role="navigation"
      {...other}
    >
      <NavItem
        path="/introduction"
        label="Introduction"
        icon={<AssignmentInd />}
        openSidebar={openSidebar}
      />
      <NavItem
        path="/experience"
        label="Experience"
        icon={<WorkHistory />}
        openSidebar={openSidebar}
      />
      <NavItem
        path="/education"
        label="Education"
        icon={<SchoolRounded />}
        openSidebar={openSidebar}
      />
      <NavItem
        path="/skills-and-certificates"
        label="Skills & Certs"
        icon={<WorkspacePremium />}
        openSidebar={openSidebar}
      />
    </List>
  );
});

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <ListItem>
      <ListItemButton
        component={Link}
        selected={!!useMatch(props.path)}
        to={props.path}
        aria-current="page"
      >
        <ListItemDecorator children={props.icon} />

        {props.openSidebar ? (
          <ListItemContent>{props.label}</ListItemContent>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
}

type NavigationProps = {
  sx?: Omit<ListProps, "children">;
  openSidebar: boolean;
};

type NavItemProps = {
  path: string;
  label: string;
  icon: ReactNode;
  openSidebar: boolean;
};
