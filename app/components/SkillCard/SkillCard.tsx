import StyledCard from "../StyledCard/StyledCard";
import DonutChart from "../DonutChart/DonutChart";
import { Typography } from "@mui/joy";

const SkillCard = ({ name, value, experience }: SkillCardProps) => {
  return (
    <StyledCard>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DonutChart value={value} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: 30,
          }}
        >
          <Typography level="h4" sx={{ textAlign: "bottom" }}>
            {name}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography level="h1" sx={{ fontSize: 60 }}>
              {experience}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingBottom: 16,
              }}
            >
              <Typography level="body-xs">Experience</Typography>
              <Typography level="body-md">+years</Typography>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default SkillCard;

type SkillCardProps = { name: string; value: number; experience: number };
