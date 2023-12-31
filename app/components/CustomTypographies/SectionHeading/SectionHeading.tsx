import TagRoundedIcon from "@mui/icons-material/TagRounded";
import { Box, Typography } from "@mui/joy";

const SectionHeading = ({
  title,
  needMarginTop = false,
}: {
  title: string;
  needMarginTop?: boolean;
}) => {
  let sx = {};
  needMarginTop ? (sx = { mt: 6 }) : {};
  return (
    <Box display={"flex"} sx={sx}>
      <TagRoundedIcon sx={{ mt: 0.6 }} />
      <Typography level="h3" sx={{ mb: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};
export default SectionHeading;
