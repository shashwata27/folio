import { Card, Typography } from "@mui/joy";

const MarksCard = ({ type = "Percentage", value }: MarksCardProps) => (
  <Card
    color="primary"
    orientation="vertical"
    variant="soft"
    sx={{ justifyContent: "center", alignItems: "center" }}
  >
    <Typography color="neutral" level="title-lg">
      {type}
    </Typography>
    <Typography
      color="success"
      level="h1"
      sx={{ minWidth: "120px", textAlign: "center" }}
    >
      {value}
    </Typography>
  </Card>
);

export default MarksCard;

type MarksCardProps = {
  type: "Percentage" | "DGPA";
  value: string;
};
