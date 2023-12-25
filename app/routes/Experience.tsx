import { Container, Step, StepIndicator, Stepper, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";
import CollapsibleList from "../components/CollapsableList/CollapsableList";
import { thoughtworksExperienceData } from "../data/experience-data";

export const Component = function Experience(): JSX.Element {
  usePageEffect({ title: "Experience" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 4 }} level="h1" gutterBottom>
        Experience
      </Typography>
      <Typography level="h3">Thoughtworks</Typography>
      <Stepper orientation={"vertical"}>
        <Step
          sx={{
            "&::after": {
              height: 2,
              borderRadius: "24px",
              background:
                "linear-gradient(to right, #002f61, #00507b, #006e8e, #008b98, #00a79c)",
            },
          }}
          indicator={
            <StepIndicator variant="solid" color="primary">
              Now
            </StepIndicator>
          }
        >
          <Typography level="h4" gutterBottom>
            Data Access Manager
          </Typography>
          <CollapsibleList
            details={thoughtworksExperienceData["DAM"]}
          ></CollapsibleList>
        </Step>
        <Step
          indicator={
            <StepIndicator variant="solid" color="primary">
              Now
            </StepIndicator>
          }
        >
          <Typography level="h4" gutterBottom>
            Data Product/Mesh Creater
          </Typography>
        </Step>
        <Step
          indicator={
            <StepIndicator variant="solid" color="primary">
              Now
            </StepIndicator>
          }
        >
          <Typography level="h4" gutterBottom>
            Predict Future Growth Using Data Products POC
          </Typography>
        </Step>
      </Stepper>
    </Container>
  );
};
