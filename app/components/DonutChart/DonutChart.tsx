import { CircularProgress, Typography } from "@mui/joy";

const DonutChart = ({ value }: { value: number }) => {
  return (
    <CircularProgress
      size="lg"
      determinate
      value={value}
      sx={{
        "--CircularProgress-size": "120px",
        "--CircularProgress-progressThickness": "14px",
        "--CircularProgress-progressColor": "#51bc51",
        "--CircularProgress-trackThickness": "5px",
        "--CircularProgress-trackColor": "#ff0000",
      }}
    >
      <Typography>{75}%</Typography>
    </CircularProgress>
  );
};

export default DonutChart;
