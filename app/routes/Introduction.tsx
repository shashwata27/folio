import { Container, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";

export const Component = function Introduction(): JSX.Element {
  usePageEffect({ title: "Introduction" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 4 }} level="h1">
        Introduction
      </Typography>

      <Typography level="body-lg">
        <b>Polyglot</b> Developer with expertise in analyzing business’s
        requirements and turning to solutions by object-oriented, domain design
        approaches.
      </Typography>
      <Typography level="body-lg">
        {" "}
        Focused, results-driven & practitioner of clean code & TDD.
      </Typography>
    </Container>
  );
};
