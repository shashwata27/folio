import { Container, Typography } from "@mui/joy";
import SkillCard from "../components/SkillCard/SkillCard";

enum ESkillsAndCertificates {
  Skills = "skills",
  Certificates = "certificates",
}

export const Component = function SkillsAndCerts(): JSX.Element {
  return (
    <Container
      sx={{
        py: 2,
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <section id={ESkillsAndCertificates.Skills}>
        <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
          Skills
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <SkillCard name={`React.js`} value={75} experience={2} />
          <SkillCard name={`React.js`} value={75} experience={2} />
          <SkillCard name={`React.js`} value={75} experience={2} />
          <SkillCard name={`React.js`} value={75} experience={2} />
          <SkillCard name={`React.js`} value={75} experience={2} />
        </div>
      </section>

      <section id={ESkillsAndCertificates.Certificates}>
        <Typography id={"experience"} sx={{ mb: 4 }} level="h1" gutterBottom>
          Certificates
        </Typography>
      </section>
    </Container>
  );
};
