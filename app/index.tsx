import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./core/store";
import { theme } from "./core/theme";
import { Router } from "./routes/index";
import { Global } from "@emotion/react";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Global
          styles={{
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#1f7a1f",
              borderRadius: "3px",
            },
            "::-webkit-scrollbar": {
              width: "10px",
            },
          }}
        />
        <StoreProvider>
          <Router />
        </StoreProvider>
      </SnackbarProvider>
    </CssVarsProvider>
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => root.unmount());
}
