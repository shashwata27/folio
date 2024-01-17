import { Box, GlobalStyles } from "@mui/joy";
import { Fragment, Suspense, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

/**
 * The main application layout.
 */

type ContextType = { openSidebar: boolean };
export function MainLayout(): JSX.Element {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <Fragment>
      <GlobalStyles
        styles={{
          "#root": {
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto 1fr",
            height: "100dvh",
          },
        }}
      />
      <Toolbar sx={{ gridArea: "1 / 2 / 2 / -1" }} />

      <Sidebar sx={{ gridArea: "1 / 1 / -1 / 2" }} openSidebar={openSidebar} />
      <Logo
        sx={{ gridArea: "1 / 1 / 2 / 2", zIndex: 100 }}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <Box sx={{ gridArea: "1 / 2 / -1 / -1", pt: "60px" }}>
        <Suspense>
          <Outlet context={{ openSidebar } satisfies ContextType} />
        </Suspense>
      </Box>
    </Fragment>
  );
}
export function useOutetContext() {
  return useOutletContext<ContextType>();
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles
        styles={{
          "#root": {
            display: "grid",
            gridTemplateColumns: "1fr",
            minHeight: "100vh",
          },
        }}
      />

      <Box sx={{ gridArea: "1 / 1 / -1 / -1", pt: "60px" }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </Fragment>
  );
}
