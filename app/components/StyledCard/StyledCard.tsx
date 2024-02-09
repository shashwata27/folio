import { Card } from "@mui/joy";
import { ReactNode } from "react";
import { TSkillGroup } from "../../routes/SkillsAndCerts";
type TGroupColors = Record<TSkillGroup, string>;
const groupColors: TGroupColors = {
  Language: "rgba(255,106,0,0.4)",
  Framework: "rgba(0,128,255,0.4)",
  Database: "rgba(101,101,101,0.4)",
  Tool: "rgba(55,255,0,0.4)",
  Cloud: "rgba(248,0,255,0.4)",
  "Soft Skill": "rgba(255,0,8,0.4)",
};

const StyledCard = ({ children, group }: StyledCardProps) => {
  return (
    <Card
      variant="soft"
      // color="primary"
      sx={{
        p: 3,
        m: 2,
        backgroundColor: groupColors[group],
      }}
    >
      {children}
    </Card>
  );
};

export default StyledCard;

type StyledCardProps = { children: ReactNode; group: TSkillGroup };
