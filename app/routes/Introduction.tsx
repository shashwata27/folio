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
        <b>Polyglot Developer</b>, skilled in analyzing business needs and
      </Typography>
      <Typography level="body-lg">
        {" "}
        translating them into solutions through <b>object-oriented</b>,
        <b>domain-driven design</b>.
      </Typography>

      <Typography level="body-lg">
        {" "}
        With <b>2+</b> years of experience able to align, and drive small teams
        through cultivation.
      </Typography>
      <Typography level="body-lg">
        {" "}
        Focused, results-driven & practitioner of <b>clean code</b> &{" "}
        <b>Test-Driven Development</b>.
      </Typography>
    </Container>
  );
};
