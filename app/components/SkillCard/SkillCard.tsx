import StyledCard from "../StyledCard/StyledCard";
import DonutChart from "../DonutChart/DonutChart";
import { Chip, Typography } from "@mui/joy";
import { TSkillGroup } from "../../routes/SkillsAndCerts";

const SkillCard = ({
  name,
  value,
  experience: experienceValue,
  cardGroup,
}: SkillCardProps) => {
  return (
    <StyledCard group={cardGroup}>
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
          <Typography
            level={name.length > 12 ? "title-lg" : "h4"}
            sx={{ textAlign: "bottom" }}
          >
            {name}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography level="h1" sx={{ fontSize: 60 }}>
              {experienceValue}
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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip
              color="neutral"
              variant="outlined"
              sx={{ fontSize: 10, marginRight: 0.1, marginBottom: 0.1 }}
            >
              {cardGroup}
            </Chip>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default SkillCard;

type SkillCardProps = {
  name: string;
  value: number;
  experience: number;
  cardGroup: TSkillGroup;
};
