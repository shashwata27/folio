import { Typography } from "@mui/joy";

const SectionSubHeading = ({ children }: { children: string }) => {
  return (
    <Typography level="h4" sx={{ pt: 1, ml: 14 }} gutterBottom>
      {children}
    </Typography>
  );
};
export default SectionSubHeading;
