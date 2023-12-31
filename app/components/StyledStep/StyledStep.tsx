import { Chip, Step, StepIndicator } from "@mui/joy";
import { ReactNode } from "react";

const StyledStep = ({ children, indicatorDates }: StyledStepProps) => {
  return (
    <Step
      sx={{
        "--Step-connectorThickness": "3px",
        "&::after": {
          height: 2,
          borderRadius: "24px",
          background:
            "linear-gradient(to top, #002f61, #00507b, #006e8e, #008b98, #00a79c)",
        },
      }}
      indicator={
        <StepIndicator variant="solid" color="primary" sx={{ ml: 10 }}>
          <Chip color="success" variant="solid">
            {indicatorDates
              ? `${indicatorDates.startDate}-${indicatorDates.endDate}`
              : `around same time`}
          </Chip>
        </StepIndicator>
      }
    >
      {children}
    </Step>
  );
};

export default StyledStep;

type StyledStepProps = {
  children: ReactNode;
  indicatorDates?: { startDate: string; endDate: string };
};
