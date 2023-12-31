import { Container, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";

export const Component = function Messages(): JSX.Element {
  usePageEffect({ title: "Education" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography level="h2" gutterBottom>
        Education
      </Typography>
      <Typography>Coming soon...</Typography>
    </Container>
  );
};
