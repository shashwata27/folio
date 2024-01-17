import { CircularProgress, Typography } from "@mui/joy";
// import { useCountUp } from "use-count-up";

const DonutChart = ({ value }: { value: number }) => {
  // const { value: value2 } = useCountUp({
  //   isCounting: true,
  //   duration: 1,
  //   start: 0,
  //   end: value,
  // });

  return (
    <CircularProgress
      size="lg"
      determinate
      // value={value2 as number}
      value={value}
      sx={{
        "--CircularProgress-size": "120px",
        "--CircularProgress-progressThickness": "14px",
        "--CircularProgress-progressColor": "#51bc51",
        "--CircularProgress-trackThickness": "5px",
        "--CircularProgress-trackColor": "#ff0000",
      }}
    >
      <Typography>
        {/*{value2 as number}%*/}
        {value}
      </Typography>
    </CircularProgress>
  );
};

export default DonutChart;
