import { Sheet } from "@mui/joy";
import { Navigation } from "./navigation";

let width = 300;

export function Sidebar(props: SidebarProps): JSX.Element {
  const { sx, openSidebar, ...other } = props;
  openSidebar ? (width = 300) : (width = 68);

  return (
    <Sheet
      sx={{
        pt: "60px",
        px: 2,
        borderRight: ({ palette }) => `1px solid ${palette.divider}`,
        overflow: "auto",
        width,
        ...sx,
      }}
      aria-label="Sidebar"
      {...other}
    >
      <Navigation openSidebar={openSidebar} />
    </Sheet>
  );
}

export type SidebarProps = {
  sx: { gridArea: string };
  openSidebar: boolean;
};
