import { Card } from "@mui/joy";
import { ReactNode } from "react";

const StyledCard = ({ children }: { children: ReactNode }) => {
  return (
    <Card
      variant="soft"
      color="primary"
      sx={{
        p: 3,
        m: 2,
      }}
    >
      {children}
    </Card>
  );
};

export default StyledCard;
