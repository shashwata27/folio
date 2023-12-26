import { Step, StepIndicator } from "@mui/joy";
import { ReactNode } from "react";

const StyledStep = ({ children }: StyledStepProps) => {
  return (
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
      {children}
    </Step>
  );
};

export default StyledStep;

type StyledStepProps = { children: ReactNode };
